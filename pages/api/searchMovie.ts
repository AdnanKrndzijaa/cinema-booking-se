import { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    if (req.method === "GET") {
        try {
            const {q: query} = req.query;

            if(typeof query != "string") {
                throw new Error("Invalid request");
            }

            const movies = await prismadb.movie.findMany({
                where: {
                    OR: 
                    [
                        {
                            title: {
                                contains: query,
                                mode: "insensitive"
                            },
                        },
                        {
                            description: {
                                contains: query,
                                mode: "insensitive"
                            }
                        }
                    ],
                },
                
            });

            res.status(200).json({ movies });
        } catch (error) {
            res.status(500).end();
        }
    }
}