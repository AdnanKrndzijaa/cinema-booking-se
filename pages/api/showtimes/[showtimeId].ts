// Import the necessary modules
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { showtimeId } = req.query;

    if (typeof showtimeId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!showtimeId) {
      throw new Error('Missing Id');
    }

    const showtime = await prismadb.showtime.findUnique({
      where: {
        id: showtimeId
      }
    });

    return res.status(200).json(showtime); // Return the showtime as JSON response

  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` }); // Internal Server Error with error message
  }
}
