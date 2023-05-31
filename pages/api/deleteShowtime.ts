import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'DELETE') {
      return res.status(405).end();
    }

    const { showtimeId } = req.body;

    const existingShowtime = await prismadb.showtime.findUnique({
      where: {
        id: showtimeId
      }
    });

    if (!existingShowtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }

    await prismadb.showtime.delete({
      where: {
        id: showtimeId
      }
    });

    return res.status(200).json({ message: 'Showtime deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}
