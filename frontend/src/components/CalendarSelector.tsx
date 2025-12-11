'use client';

import { useMemo } from 'react';

interface Props {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
}

const hours = ['09:00', '10:30', '12:00', '14:00', '16:00', '18:30'];

export function CalendarSelector({ selectedDate, selectedTime, onDateChange, onTimeChange }: Props) {
  const nextSevenDays = useMemo(() => {
    const days: string[] = [];
    const now = new Date();
    for (let i = 0; i < 7; i += 1) {
      const next = new Date(now);
      next.setDate(now.getDate() + i);
      days.push(next.toISOString().split('T')[0]);
    }
    return days;
  }, []);

  return (
    <div className="card stack">
      <h3 style={{ margin: 0 }}>Elegí fecha y horario</h3>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div className="stack">
          <label htmlFor="date">Fecha</label>
          <select id="date" value={selectedDate} onChange={(event) => onDateChange(event.target.value)}>
            <option value="">Seleccioná</option>
            {nextSevenDays.map((date) => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short' })}
              </option>
            ))}
          </select>
        </div>
        <div className="stack">
          <label htmlFor="time">Horario</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.5rem' }}>
            {hours.map((hour) => (
              <button
                key={hour}
                type="button"
                className={`button ${selectedTime === hour ? '' : 'secondary'}`}
                onClick={() => onTimeChange(hour)}
                aria-pressed={selectedTime === hour}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
