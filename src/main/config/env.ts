export const env = {
  appName: process.env.APP_NAME ?? '',
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'jk43h5jk43h5k34',
  internalToken: process.env.INTERNAL_TOKEN ?? '',
  environment: process.env.NODE_ENV ?? 'development',
  opentelemetry: process.env.OPEN_TELEMETRY ?? '',
  clerk: {
    apiKey: process.env.clerk_API_KEY ?? '',
    authDomain: process.env.clerk_AUTH_DOMAIN ?? '',
    projectId: process.env.clerk_PROJECT_ID ?? '',
    storageBucket: process.env.clerk_STORAGE_BUCKET ?? '',
    messagingSenderId: process.env.clerk_MESSAGING_SENDER_ID ?? '',
    appId: process.env.clerk_APP_ID ?? ''
  },
  loki: {
    url: process.env.LOKI_URL ?? ''
  },
  redis: {
    scheme: process.env.REDIS_SCHEME ?? 'TLS',
    host: process.env.REDIS_HOST ?? '127.0.0.1',
    password: process.env.REDIS_PASSWORD ?? '',
    port: process.env.REDIS_PORT ?? 6379,
    url: `redis${process.env.REDIS_SCHEME === 'tls' ? 's' : ''}://${
      process.env.REDIS_USER ?? ''
    }:${process.env.REDIS_PASSWORD ?? ''}@${process.env.REDIS_HOST ?? ''}:${
      process.env.REDIS_PORT ?? ''
    }/1`
  },
  sentry: {
    dsn: process.env.SENTRY_DSN ?? ''
  }
}
