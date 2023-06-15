import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

class ShowtimeBuilder {
  private showtimeId: string;

  public withShowtimeId(showtimeId: string): ShowtimeBuilder {
    this.showtimeId = showtimeId;
    return this;
  }

  public async deleteShowtime(): Promise<void> {
    const existingShowtime = await prismadb.showtime.findUnique({
      where: {
        id: this.showtimeId
      }
    });

    if (!existingShowtime) {
      throw new Error('Showtime not found');
    }

    await prismadb.showtime.delete({
      where: {
        id: this.showtimeId
      }
    });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'DELETE') {
      return res.status(405).end();
    }

    const { showtimeId } = req.body;

    await new ShowtimeBuilder()
      .withShowtimeId(showtimeId)
      .deleteShowtime();

    return res.status(200).json({ message: 'Showtime deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}
