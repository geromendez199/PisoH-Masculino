'use client';

import { useEffect, useMemo, useState } from 'react';
import { CalendarSelector } from '../../../components/CalendarSelector';
import { FormField } from '../../../components/FormField';
import { mockServices } from '../../../modules/services/mockData';
import { Booking, Client } from '../../../types/domain';

interface BookingPayload {
  serviceId: string;
  professionalId?: string;
  date: string;
  time: string;
  client: Client;
}

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [client, setClient] = useState<Client>({ name: '', email: '', phone: '' });
  const [confirmation, setConfirmation] = useState<Booking | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) {
      setSelectedService(service);
    }
  }, []);

  const chosenService = useMemo(() => mockServices.find((service) => service.id === selectedService), [selectedService]);

  const handleSubmit = () => {
    if (!chosenService || !selectedDate || !selectedTime || !client.name || !client.email) {
      alert('Completá los campos obligatorios');
      return;
    }

    const booking: Booking = {
      id: crypto.randomUUID(),
      serviceId: chosenService.id,
      date: selectedDate,
      time: selectedTime,
      client,
      status: 'scheduled'
    };

    setConfirmation(booking);
  };

  return (
    <section className="stack">
      <div className="stack" style={{ gap: '0.3rem' }}>
        <p className="badge">Agendá tu turno</p>
        <h1 className="section-title">Definí tu servicio</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 620 }}>
          Seleccioná el servicio, elegí fecha y horario disponibles y completá tus datos. Podés ajustar luego desde el panel de
          administración.
        </p>
      </div>

      <div className="card stack">
        <label htmlFor="service">Servicio</label>
        <select id="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
          <option value="">Seleccioná una opción</option>
          {mockServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        {chosenService && (
          <p style={{ margin: 0, color: 'var(--muted)' }}>
            Duración: {chosenService.durationMinutes} min — Valor: ${chosenService.price}
          </p>
        )}
      </div>

      <CalendarSelector
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onDateChange={setSelectedDate}
        onTimeChange={setSelectedTime}
      />

      <div className="card stack">
        <h3 style={{ margin: 0 }}>Datos del cliente</h3>
        <FormField
          id="name"
          label="Nombre y apellido"
          value={client.name}
          onChange={(event) => setClient({ ...client, name: event.target.value })}
          required
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          value={client.email}
          onChange={(event) => setClient({ ...client, email: event.target.value })}
          required
        />
        <FormField
          id="phone"
          label="Teléfono"
          value={client.phone}
          onChange={(event) => setClient({ ...client, phone: event.target.value })}
          placeholder="Ej: +54 11 5555-4444"
        />
        <button className="button" type="button" onClick={handleSubmit}>
          Confirmar turno
        </button>
        {confirmation && (
          <div className="card" style={{ background: '#10161d', borderColor: 'var(--accent)' }}>
            <strong>Turno generado</strong>
            <p style={{ marginBottom: 0, color: 'var(--muted)' }}>
              {chosenService?.name} el {new Date(confirmation.date).toLocaleDateString('es-AR')} a las {confirmation.time}.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
