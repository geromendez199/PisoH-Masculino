import { ServiceCard } from '../../../components/ServiceCard';
import { mockServices } from '../../../modules/services/mockData';

export default function ServicesPage() {
  return (
    <section className="stack">
      <div className="stack">
        <p className="badge">Catálogo</p>
        <h1 className="section-title">Servicios disponibles</h1>
        <p style={{ color: 'var(--muted)' }}>
          Repertorio inicial listo para integrarse con la API de backend. Añadí más campos o filtros desde los módulos de datos.
        </p>
      </div>
      <div className="grid">
        {mockServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
