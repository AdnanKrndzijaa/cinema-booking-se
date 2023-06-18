import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

class ShowtimeBuilder {
  private showtimeId: string;
  private movie: string;
  private dateTime: string;
  private type: string;

  public withShowtimeId(showtimeId: string): ShowtimeBuilder {
    this.showtimeId = showtimeId;
    return this;
  }

  public withMovie(movie: string): ShowtimeBuilder {
    this.movie = movie;
    return this;
  }

  public withDateTime(dateTime: string): ShowtimeBuilder {
    this.dateTime = dateTime;
    return this;
  }

  public withType(type: string): ShowtimeBuilder {
    this.type = type;
    return this;
  }

  public async updateShowtime(): Promise<any> {
    const existingShowtime = await prismadb.showtime.findUnique({
      where: {
        id: this.showtimeId
      }
    });

    if (!existingShowtime) {
      throw new Error('Showtime not found');
    }

    const updatedShowtime = await prismadb.showtime.update({
      where: {
        id: this.showtimeId
      },
      data: {
        movie: this.movie,
        dateTime: this.dateTime,
        type: this.type
      }
    });

    return updatedShowtime;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'PUT') {
      return res.status(405).end();
    }

    const { showtimeId, movie, dateTime, type } = req.body;

    const updatedShowtime = await new ShowtimeBuilder()
      .withShowtimeId(showtimeId)
      .withMovie(movie)
      .withDateTime(dateTime)
      .withType(type)
      .updateShowtime();

    return res.status(200).json(updatedShowtime);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
