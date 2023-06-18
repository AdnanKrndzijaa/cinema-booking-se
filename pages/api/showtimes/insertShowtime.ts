import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

class ShowtimeHandler {
  private static instance: ShowtimeHandler;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): ShowtimeHandler {
    if (!ShowtimeHandler.instance) {
      ShowtimeHandler.instance = new ShowtimeHandler();
    }
    return ShowtimeHandler.instance;
  }

  public async handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      if (req.method !== 'POST') {
        res.status(405).end();
        return;
      }

      const { movie, dateTime, type } = req.body;

      const showtime = await prismadb.showtime.create({
        data: {
          movie,
          dateTime,
          type,
        }
      });

      res.status(200).json(showtime);
    } catch (error) {
      res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }
}

const showtimeHandler = ShowtimeHandler.getInstance();

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await showtimeHandler.handle(req, res);
}
