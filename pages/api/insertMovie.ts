import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { firstName, lastName, email, password } = req.body;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        name
      }
    })

    if (existingMovie) {
      return res.status(422).json({ error: 'Movie already exist' });
    }


    const user = await prismadb.movie.create({
      data: {
        firstName,
        lastName,
        email,
      }
    })

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}