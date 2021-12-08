import { IncomingMessage, ServerResponse } from 'http';

import Database from '../../../database/db';

export default async function findAll(
  req: IncomingMessage,
  res: ServerResponse
) {
  const database = new Database();
  const data = await database.getAll();
  const length = data.length;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ length, data }));
}
