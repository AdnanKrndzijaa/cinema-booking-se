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

  public async createMovie(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      if (req.method !== 'POST') {
        res.status(405).end();
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

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          title: movieName,
        },
      });

      if (existingMovie) {
        res.status(422).json({ error: 'Movie already exists' });
        return;
      }

      const movie = await prismadb.movie.create({
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

      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }
}

// Usage in your handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbInstance = Database.getInstance();
  await dbInstance.createMovie(req, res);
}
