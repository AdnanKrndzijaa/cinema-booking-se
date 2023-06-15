import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const showtimes = await prismadb.showtime.findMany({
      include: {
        movie: {
          select: {
            title: true,
            bannerUrl: true,
          },
        },
      },
    });

    return res.status(200).json(showtimes);
  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}
