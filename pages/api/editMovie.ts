import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'PUT') {
      const { movieId } = req.body;

      if (!movieId) {
        return res.status(400).json({ error: 'Movie ID is required' });
      }

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      })

      if (!existingMovie) {
        return res.status(404).json({ error: 'Movie not found' });
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
        movieImages
      } = req.body;

      const updatedMovie = await prismadb.movie.update({
        where: {
          id: movieId 
        },
        data: {
          title : movieName,
          description : movieDescription,
          bannerUrl : movieBanner,
          genre : { set: movieGenres },
          duration: movieDuration,
          trailer: movieTrailer,
          rating: movieRating,
          releaseYear : movieReleaseYear,
          actorImagesUrl : { set: movieCastersImages },
          actors : { set: movieCastersRealNames },
          casts : { set: movieCastersMovieNames },
          galleryImages : { set: movieImages },
          storyline: movieStoryline,
          writers : { set: movieWriters },
        }
      })

      return res.status(200).json(updatedMovie);
    }

    return res.status(405).end();
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
