import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
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

        return res.status(200).json(showtime)
  } catch (error) {
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}
