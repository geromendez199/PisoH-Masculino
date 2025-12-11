import { z } from 'zod';

export const bookingSchema = z.object({
  id: z.string().optional(),
  serviceId: z.string(),
  professionalId: z.string().optional(),
  date: z.string(),
  time: z.string(),
  client: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(6)
  }),
  status: z.enum(['scheduled', 'cancelled']).optional()
});

export type BookingInput = z.infer<typeof bookingSchema>;
