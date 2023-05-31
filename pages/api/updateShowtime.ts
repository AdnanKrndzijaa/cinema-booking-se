import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'PUT') {
      return res.status(405).end();
    }

    const { showtimeId, movie, dateTime, type } = req.body;

    const existingShowtime = await prismadb.showtime.findUnique({
      where: {
        id: showtimeId
      }
    });

    if (!existingShowtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }

    const updatedShowtime = await prismadb.showtime.update({
      where: {
        id: showtimeId
      },
      data: {
        movie,
        dateTime,
        type
      }
    });

    return res.status(200).json(updatedShowtime);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
