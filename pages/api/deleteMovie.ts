import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'DELETE') {
      return res.status(405).end();
    }

    const { movieId } = req.body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!existingMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await prismadb.movie.delete({
      where: {
        id: movieId
      }
    });

    return res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
