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

  public async deleteShowtime(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      if (req.method !== 'DELETE') {
        res.status(405).end();
        return;
      }

      const { showtimeId } = req.body;
      console.log('Request Body:', req.body);

      if (!showtimeId) {
        res.status(400).json({ error: 'Showtime ID is required' });
        return;
      }

      // Check if the showtime exists
      const existingShowtime = await prismadb.showtime.findUnique({
        where: {
          id: showtimeId,
        },
      });

      if (!existingShowtime) {
        res.status(404).json({ error: 'Showtime not found' });
        return;
      }

      // Delete the showtime
      await prismadb.showtime.delete({
        where: {
          id: showtimeId,
        },
      });

      res.status(200).json({ message: 'Showtime deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbInstance = Database.getInstance();

  if (req.method === 'DELETE') {
    await dbInstance.deleteShowtime(req, res);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
