export const env = {
  port: process.env.PORT ? Number(process.env.PORT) : 4000,
  corsOrigin: process.env.CORS_ORIGIN ?? '*'
};
