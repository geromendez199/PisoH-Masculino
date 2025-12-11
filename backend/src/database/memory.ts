import { Booking, Professional, Service } from '../domain/types';

const services: Service[] = [
  {
    id: 'laser-01',
    name: 'Depilación definitiva espalda',
    description: 'Sesión de depilación láser en espalda completa con equipos de última generación.',
    durationMinutes: 50,
    price: 32000,
    category: 'Depilación'
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

const professionals: Professional[] = [
  { id: 'pro-1', name: 'Agustín Carrizo', specialty: 'Masoterapeuta' },
  { id: 'pro-2', name: 'Santiago Vera', specialty: 'Especialista en depilación' }
];

const bookings: Booking[] = [];

export const db = {
  services,
  professionals,
  bookings
};
