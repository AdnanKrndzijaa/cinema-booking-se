import {NextApiRequest, NextApiResponse} from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const { ticketId } = req.query;

        if (typeof ticketId !== 'string') {
        throw new Error('Invalid Id');
        }

        if (!ticketId) {
        throw new Error('Missing Id');
        }

        const tickets = await prismadb.ticket.findUnique({
        where: {
            id: ticketId
        }
        });

        return res.status(200).json(tickets)

    } catch(error) {
        console.log({ error })
        return res.status(500).end();
    }
}