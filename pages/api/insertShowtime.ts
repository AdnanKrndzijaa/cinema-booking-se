import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

class ShowtimeBuilder {
  private movie: string;
  private dateTime: string;
  private type: string;

  constructor(movie: string) {
    this.movie = movie;
  }

  public setDateTime(dateTime: string): ShowtimeBuilder {
    this.dateTime = dateTime;
    return this;
  }

  public setType(type: string): ShowtimeBuilder {
    this.type = type;
    return this;
  }

  public async createShowtime(): Promise<any> {
    return prismadb.showtime.create({
      data: {
        movie: this.movie,
        dateTime: this.dateTime,
        type: this.type,
      },
    });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { movie, dateTime, type } = req.body;

    const showtimeBuilder = new ShowtimeBuilder(movie);
    const showtime = await showtimeBuilder
      .setDateTime(dateTime)
      .setType(type)
      .createShowtime();

    return res.status(200).json(showtime);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
