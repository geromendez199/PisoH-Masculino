import { Service } from '../../types/domain';

export const mockServices: Service[] = [
  {
    id: 'laser-01',
    name: 'Depilación definitiva espalda',
    description: 'Sesión de depilación láser en espalda completa con equipos de última generación.',
    durationMinutes: 50,
    price: 32000,
    category: 'Depilación'
  },
  {
    id: 'hands-01',
    name: 'Manicure ejecutiva',
    description: 'Cuidado de manos con enfoque higiénico y prolijo. Incluye corte, limado y tratamiento hidratante.',
    durationMinutes: 40,
    price: 12000,
    category: 'Manos'
  },
  {
    id: 'feet-01',
    name: 'Pedicure terapéutico',
    description: 'Limpieza, limado y masaje revitalizante para pies cansados. Ideal para recuperación post entrenamiento.',
    durationMinutes: 55,
    price: 15000,
    category: 'Pies'
  },
  {
    id: 'massage-01',
    name: 'Masaje descontracturante',
    description: 'Trabajo focalizado en zonas de tensión muscular con aceites neutros y técnicas profundas.',
    durationMinutes: 60,
    price: 22000,
    category: 'Masajes'
  }
];
