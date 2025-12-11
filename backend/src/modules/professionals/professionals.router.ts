import { Router } from 'express';
import { db } from '../../database/memory';
import { Professional } from '../../domain/types';
import { professionalSchema } from './professionals.schema';

export const professionalsRouter = Router();

professionalsRouter.get('/', (_req, res) => {
  res.json(db.professionals);
});

professionalsRouter.post('/', (req, res) => {
  const parsed = professionalSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.issues);
  }

  const professional: Professional = { ...parsed.data, id: parsed.data.id ?? `pro-${Date.now()}` };
  db.professionals.push(professional);
  return res.status(201).json(professional);
});

professionalsRouter.put('/:id', (req, res) => {
  const id = req.params.id;
  const parsed = professionalSchema.safeParse({ ...req.body, id });
  if (!parsed.success) {
    return res.status(400).json(parsed.error.issues);
  }

  const index = db.professionals.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Profesional no encontrado' });
  }

  db.professionals[index] = { ...parsed.data, id };
  return res.json(db.professionals[index]);
});

professionalsRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = db.professionals.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Profesional no encontrado' });
  }

  db.professionals.splice(index, 1);
  return res.status(204).send();
});
