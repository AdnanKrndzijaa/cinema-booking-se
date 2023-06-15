import { NextApiRequest, NextApiResponse } from 'next';
import serverAuth from '@/lib/serverAuth';
import prismadb from '@/lib/prismadb';

class DeleteUserHandler {
  private static instance: DeleteUserHandler | null = null;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): DeleteUserHandler {
    if (!DeleteUserHandler.instance) {
      DeleteUserHandler.instance = new DeleteUserHandler();
    }

    return DeleteUserHandler.instance;
  }

  public async handleDeleteUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      if (req.method !== 'DELETE') {
        res.status(405).end();
        return;
      }

      const { userId } = req.body;

      const { currentUser } = await serverAuth(req, res);

      if (!currentUser) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      if (!currentUser) {
        return res.status(403).json({ error: 'Unauthorized' });
      }

      const existingUser = await prismadb.user.findUnique({
        where: {
          id: userId
        }
      });

      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      await prismadb.user.delete({
        where: {
          id: userId
        }
      });

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: `Something went wrong: ${error}` });
    }
  }
}

// Usage in your handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const deleteUserHandler = DeleteUserHandler.getInstance();
  await deleteUserHandler.handleDeleteUser(req, res);
}
