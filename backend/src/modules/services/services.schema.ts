import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2),
  description: z.string().min(8),
  durationMinutes: z.number().min(10),
  price: z.number().nonnegative(),
  category: z.string().min(2)
});

export type ServiceInput = z.infer<typeof serviceSchema>;
