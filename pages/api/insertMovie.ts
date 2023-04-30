import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
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
      movieImages } = req.body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        title : movieName
      }
    })

    if (existingMovie) {
      return res.status(422).json({ error: 'Movie already exist' });
    }

    const movie = await prismadb.movie.create({
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

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}