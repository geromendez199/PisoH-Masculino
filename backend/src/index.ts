import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { servicesRouter } from './modules/services/services.router';
import { professionalsRouter } from './modules/professionals/professionals.router';
import { bookingsRouter } from './modules/bookings/bookings.router';

const app = express();
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Piso H API operativa' });
});

app.use('/api/services', servicesRouter);
app.use('/api/professionals', professionalsRouter);
app.use('/api/bookings', bookingsRouter);

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`API lista en http://localhost:${env.port}`);
});
