import { PrismaClient, User } from '@prisma/client';
import { getSession } from 'next-auth/react';

import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ message: 'Unauthorized' });

  if (req.method === 'POST') {
    try {
      const { name, date, buyIn } = req.body;

      const user = (await prisma.user.findUnique({
        where: { email: session.user?.email as string },
      })) as User;

      const tournament = await prisma.tournaments.create({
        data: { name, date, buyIn, ownerId: user.id },
      });

      res.status(200).json(tournament);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
