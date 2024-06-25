import express, { Express, Request, Response } from 'express';
import compression from 'compression';
import compressFilter from './utils/compressFilter.util';

const app: Express = express();

// Compression is used to reduce the size of the response body
app.use(compression({ filter: compressFilter }));

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
