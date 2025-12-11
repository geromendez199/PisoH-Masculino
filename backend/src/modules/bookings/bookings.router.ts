import { Router } from 'express';
import { db } from '../../database/memory';
import { Booking } from '../../domain/types';
import { bookingSchema } from './bookings.schema';

export const bookingsRouter = Router();

bookingsRouter.get('/', (_req, res) => {
  res.json(db.bookings);
});

bookingsRouter.post('/', (req, res) => {
  const parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.issues);
  }

  const booking: Booking = {
    ...parsed.data,
    id: parsed.data.id ?? `bk-${Date.now()}`,
    status: parsed.data.status ?? 'scheduled'
  };

  db.bookings.push(booking);
  return res.status(201).json(booking);
});

bookingsRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = db.bookings.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Reserva no encontrada' });
  }

  db.bookings[index].status = 'cancelled';
  return res.json(db.bookings[index]);
});
