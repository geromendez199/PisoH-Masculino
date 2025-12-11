import Link from 'next/link';
import { Service } from '../types/domain';

interface Props {
  service: Service;
  compactDescription?: boolean;
}

export function ServiceCard({ service, compactDescription = false }: Props) {
  return (
    <article className="card stack">
      <header className="stack">
        <div className="badge">{service.category}</div>
        <div>
          <h3 style={{ margin: '0 0 0.35rem 0' }}>{service.name}</h3>
          <p style={{ margin: 0, color: 'var(--muted)' }}>
            {compactDescription
              ? `${service.description.slice(0, 110)}${service.description.length > 110 ? '…' : ''}`
              : service.description}
          </p>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="stack" style={{ gap: '0.35rem' }}>
          <span className="badge">{service.durationMinutes} min</span>
          <strong style={{ fontSize: '1.2rem' }}>${service.price}</strong>
        </div>
        <Link className="button" href={`/booking?service=${service.id}`}>
          Agendar
        </Link>
      </div>
    </article>
  );
}
