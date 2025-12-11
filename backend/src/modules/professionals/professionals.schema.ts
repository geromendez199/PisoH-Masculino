import { z } from 'zod';

export const professionalSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2),
  specialty: z.string().min(2)
});

export type ProfessionalInput = z.infer<typeof professionalSchema>;
