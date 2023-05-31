import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { movie, dateTime, type } = req.body;

    const showtime = await prismadb.showtime.create({
      data: {
        movie,
        dateTime,
        type,
      }
    });

    return res.status(200).json(showtime);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
