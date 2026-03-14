export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const tracer = (await import('dd-trace')).default
    tracer.init({
      service: 'yannova',
      env: process.env.NODE_ENV,
      version: process.env.npm_package_version,
      logInjection: true,
    })
  }
}
