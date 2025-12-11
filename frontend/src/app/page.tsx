import { ServiceCard } from '../components/ServiceCard';
import { mockServices } from '../modules/services/mockData';

export default function LandingPage() {
  return (
    <section className="stack">
      <div className="stack">
        <p className="badge">Agenda online</p>
        <h1 className="section-title">Cuidado masculino con precisión</h1>
        <p style={{ color: 'var(--muted)' }}>
          Servicios diseñados para profesionales y deportistas que buscan resultados concretos en un entorno discreto y moderno.
        </p>
      </div>
      <div className="grid">
        {mockServices.map((service) => (
          <ServiceCard key={service.id} service={service} compactDescription />
        ))}
      </div>
    </section>
  );
}
