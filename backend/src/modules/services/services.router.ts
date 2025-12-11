import { Router } from 'express';
import { z } from 'zod';
import { db } from '../../database/memory';
import { Service } from '../../domain/types';
import { serviceSchema } from './services.schema';

export const servicesRouter = Router();

servicesRouter.get('/', (_req, res) => {
  res.json(db.services);
});

servicesRouter.post('/', (req, res) => {
  const parsed = serviceSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.issues);
  }

  const service: Service = { ...parsed.data, id: parsed.data.id ?? `srv-${Date.now()}` };
  db.services.push(service);
  return res.status(201).json(service);
});

servicesRouter.put('/:id', (req, res) => {
  const id = req.params.id;
  const parsed = serviceSchema.safeParse({ ...req.body, id });
  if (!parsed.success) {
    return res.status(400).json(parsed.error.issues);
  }

  const index = db.services.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Servicio no encontrado' });
  }

  db.services[index] = { ...parsed.data, id };
  return res.json(db.services[index]);
});

servicesRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = db.services.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Servicio no encontrado' });
  }

  db.services.splice(index, 1);
  return res.status(204).send();
});
