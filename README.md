# PisoH-Masculino

¿Quién está hablando, Gero o Sofi? Así ajusto mejor el enfoque.

Mientras tanto, acá va lo que pediste.

---

## README propuesto (`README.md`)

````markdown
# Spa Masculino – Plataforma de Agendado de Servicios

Plataforma web para la gestión de turnos de un spa masculino orientado a servicios como depilación definitiva, manicure, pedicure y masajes.  
El objetivo del proyecto es ofrecer una experiencia de reserva clara, sobria y profesional, tanto para clientes como para administradores del negocio.

## Objetivos del proyecto

- Permitir a los clientes:
  - Explorar servicios (depilación definitiva, manicure, pedicure, masajes).
  - Ver descripciones detalladas, duración, precios y profesionales disponibles.
  - Seleccionar fecha y horario disponible.
  - Reservar turnos de forma simple y segura.
- Permitir a administradores/recepción:
  - Gestionar la agenda de turnos.
  - Crear, modificar y cancelar reservas.
  - Administrar catálogo de servicios y profesionales.
  - Consultar reportes básicos de ocupación.

La estética del sitio debe ser sobria, minimalista y enfocada en un público masculino adulto, con comunicación seria y profesional.

---

## Stack tecnológico

El proyecto está pensado para implementarse en TypeScript de manera estricta, priorizando robustez y mantenibilidad.

Tecnologías sugeridas (pueden adaptarse según necesidad):

- **Frontend**
  - `React` + `TypeScript`
  - `Next.js` (para SSR/SSG y SEO)
  - `React Query` o similar para manejo de fetching de datos
  - `Zod` o similar para validación de esquemas
  - `React Hook Form` para formularios de reserva
  - CSS Modules / Tailwind CSS / styled-components (a definir)

- **Backend**
  - `Node.js` + `TypeScript`
  - `NestJS` o `Express` (con arquitectura modular)
  - `Prisma` u otro ORM para acceso a datos
  - Base de datos relacional (PostgreSQL / MySQL)

- **Infraestructura**
  - Docker para desarrollo y despliegue
  - Variables de entorno gestionadas con `.env`
  - Scripts de npm para desarrollo, build y test

---

## Funcionalidades principales

### 1. Catálogo de servicios

- Listado de servicios de spa:
  - Depilación definitiva
  - Manicure
  - Pedicure
  - Masajes (relajantes, descontracturantes, etc.)
- Campos mínimos por servicio:
  - Nombre
  - Descripción
  - Duración
  - Precio
  - Categoría
  - Profesional/es que realizan el servicio
- Posibilidad de marcar servicios destacados

### 2. Agenda y reservas (clientes)

- Selección de servicio.
- Selección de profesional (opcional, según configuración).
- Selección de día y horario disponible.
- Formulario de datos del cliente:
  - Nombre y apellido
  - Teléfono
  - Email
- Confirmación de turno y pantalla de resumen.

Opcional (para etapas posteriores):
- Recordatorios por email.
- Gestión de cancelaciones/modificaciones por parte del cliente.

### 3. Panel de administración

- Login básico para administradores.
- Vista de calendario/agenda diaria, semanal y mensual.
- Gestión de reservas:
  - Creación manual de turnos.
  - Edición.
  - Cancelación.
- Gestión de catálogo:
  - Alta, baja y modificación de servicios.
  - Alta, baja y modificación de profesionales.

---

## Estructura de carpetas sugerida

```text
/.
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/ (o app/ si se usa Next 13+)
│  │  ├─ modules/
│  │  │  ├─ booking/
│  │  │  ├─ services/
│  │  │  ├─ admin/
│  │  ├─ hooks/
│  │  ├─ lib/
│  │  ├─ styles/
│  │  └─ types/
│  └─ package.json
│
├─ backend/
│  ├─ src/
│  │  ├─ modules/
│  │  │  ├─ services/
│  │  │  ├─ bookings/
│  │  │  ├─ professionals/
│  │  │  └─ auth/
│  │  ├─ config/
│  │  ├─ database/
│  │  └─ main.ts
│  └─ package.json
│
├─ docker/
├─ .env.example
├─ package.json
└─ README.md
````

---

## Requisitos previos

* Node.js (versión recomendada LTS)
* npm o yarn
* Docker (opcional, recomendado para entorno homogéneo)
* Base de datos (PostgreSQL recomendada)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/spa-masculino-agenda.git
cd spa-masculino-agenda
```

2. Instalar dependencias del frontend y backend:

```bash
cd frontend
npm install

cd ../backend
npm install
```

3. Configurar variables de entorno:

* Copiar el archivo `.env.example` a `.env` en cada carpeta que lo requiera (frontend/backend).
* Completar valores (URL de la API, credenciales de base de datos, etc.).

---

## Scripts básicos

### Frontend

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Servir build de producción
npm run start

# Linter / Tests (a definir)
npm run lint
npm run test
```

### Backend

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Servidor en producción
npm run start

# Migraciones de base de datos (Prisma u otro)
npm run migrate
```

---

## Estándares de código

* TypeScript en modo estricto (`"strict": true` en `tsconfig.json`).
* Uso de tipos y `interfaces` para modelos de dominio:

  * Servicio
  * Profesional
  * Reserva
  * Cliente
* Validación de datos en capas:

  * Frontend: validación de formularios + esquemas (por ejemplo con Zod).
  * Backend: validación de DTOs / requests.
* Uso obligatorio de linters y formateadores:

  * ESLint
  * Prettier

---

## Roadmap (sugerido)

1. MVP:

   * Listado de servicios.
   * Creación de reservas simples.
   * Panel básico de administración.
2. Segunda etapa:

   * Gestión de profesionales.
   * Calendario visual de turnos.
   * Mejoras de UX/UI.
3. Tercera etapa:

   * Recordatorios por email.
   * Múltiples sucursales.
   * Integración con pasarela de pago.

---

## Licencia

Definir licencia según el uso previsto (ejemplo: MIT, propietario, etc.).

````
