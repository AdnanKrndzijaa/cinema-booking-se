import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

class Database {
  private static instance: Database | null = null;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public async deleteMovie(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      if (req.method !== 'DELETE') {
        res.status(405).end();
        return;
      }

      const { movieId } = req.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        res.status(404).json({ error: 'Movie not found' });
        return;
      }

      await prismadb.movie.delete({
        where: {
          id: movieId,
        },
      });

      res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }
}

// Usage in your handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbInstance = Database.getInstance();

  await dbInstance.deleteMovie(req, res);
}
