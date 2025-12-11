export interface Service {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
  category: string;
}

export interface Professional {
  id: string;
  name: string;
  specialty: string;
}

export interface Client {
  name: string;
  email: string;
  phone: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  professionalId?: string;
  date: string;
  time: string;
  client: Client;
  status: 'scheduled' | 'cancelled';
}
