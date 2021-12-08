import { NextApiRequest, NextApiResponse } from 'next';

import Database from '../../../database/db';

export default async function find(req: NextApiRequest, res: NextApiResponse) {
  const database = new Database();

  const id = req.query.id as string;

  const data = await database.getById(id);

  res.status(200).json(data);
}
