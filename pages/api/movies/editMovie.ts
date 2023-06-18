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

  public async updateMovie(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      if (req.method !== 'PUT') {
        res.status(405).end();
        return;
      }

      const { movieId } = req.body;

      if (!movieId) {
        res.status(400).json({ error: 'Movie ID is required' });
        return;
      }

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        res.status(404).json({ error: 'Movie not found' });
        return;
      }

      const {
        movieName,
        movieDescription,
        movieBanner,
        movieRating,
        movieTrailer,
        movieStoryline,
        movieDuration,
        movieGenres,
        movieReleaseYear,
        movieWriters,
        movieCastersRealNames,
        movieCastersMovieNames,
        movieCastersImages,
        movieImages,
      } = req.body;

      const updatedMovie = await prismadb.movie.update({
        where: {
          id: movieId,
        },
        data: {
          title: movieName,
          description: movieDescription,
          bannerUrl: movieBanner,
          genre: { set: movieGenres },
          duration: movieDuration,
          trailer: movieTrailer,
          rating: movieRating,
          releaseYear: movieReleaseYear,
          actorImagesUrl: { set: movieCastersImages },
          actors: { set: movieCastersRealNames },
          casts: { set: movieCastersMovieNames },
          galleryImages: { set: movieImages },
          storyline: movieStoryline,
          writers: { set: movieWriters },
        },
      });

      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }
}

// Usage in your handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbInstance = Database.getInstance();

  if (req.method === 'PUT') {
    await dbInstance.updateMovie(req, res);
  } else {
    res.status(405).end();
  }
}
