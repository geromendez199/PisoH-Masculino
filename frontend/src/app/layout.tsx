import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Providers } from '../providers/Providers';

export const metadata: Metadata = {
  title: 'Piso H - Spa Masculino',
  description: 'Agenda sobria y profesional para servicios de bienestar masculino'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <div className="app-shell">
            <header className="app-header">
              <div className="brand">Piso H</div>
              <nav>
                <a href="/">Servicios</a>
                <a href="/booking">Agendar</a>
                <a href="/admin">Admin</a>
              </nav>
            </header>
            <main className="app-main">{children}</main>
            <footer className="app-footer">Bienestar masculino con seriedad y precisión.</footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
