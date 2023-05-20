import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prismadb = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const tickets = await prismadb.ticket.findMany();
    return res.status(200).json(tickets);
  } catch (error) {
    console.error({ error });
    return res.status(500).end();
  }
}
