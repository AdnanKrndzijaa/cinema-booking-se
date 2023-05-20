import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const {
        movieId,
        movieTitle,
        bannerUrl,
        dateTimeOfCreation,
        seatNumber,
        hallNumber,
        barcode
    } = req.body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!existingMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    const ticket = await prismadb.ticket.create({
      data: {
        movie: {
          connect: {
            id: movieId,
            title: movieTitle
          }
        },
        bannerUrl: bannerUrl,
        dateTimeOfCreation: dateTimeOfCreation,
        seatNumber: seatNumber,
        hallNumber: hallNumber,
        barcode: barcode
      }
    });

    return res.status(200).json(ticket);
  } catch (error) {
    console.error({ error });
    return res.status(500).end();
  }
}
