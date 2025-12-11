import { mockServices } from '../../../modules/services/mockData';
import { ServiceCard } from '../../../components/ServiceCard';

const mockBookings = [
  { id: 'bk-1', client: 'Juan Pérez', service: 'Masaje descontracturante', date: '2024-08-12', time: '14:00' },
  { id: 'bk-2', client: 'Pablo Gómez', service: 'Depilación definitiva espalda', date: '2024-08-12', time: '16:00' }
];

export default function AdminPage() {
  return (
    <section className="stack">
      <div className="stack" style={{ gap: '0.2rem' }}>
        <p className="badge">Panel</p>
        <h1 className="section-title">Administración inicial</h1>
        <p style={{ color: 'var(--muted)', maxWidth: 620 }}>
          Punto de partida para gestionar servicios y turnos. Integra más lógica y validaciones según crezcan las necesidades.
        </p>
      </div>

      <div className="card stack">
        <h3 style={{ margin: 0 }}>Turnos próximos</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Servicio</th>
              <th>Fecha</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {mockBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.client}</td>
                <td>{booking.service}</td>
                <td>{new Date(booking.date).toLocaleDateString('es-AR')}</td>
                <td>{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="stack">
        <h3 className="section-title">Servicios publicados</h3>
        <div className="grid">
          {mockServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
