'use client';

import { useEffect } from 'react';

export function DatadogRUM() {
  useEffect(() => {
    const applicationId = process.env.NEXT_PUBLIC_DD_RUM_APPLICATION_ID;
    const clientToken = process.env.NEXT_PUBLIC_DD_RUM_CLIENT_TOKEN;

    if (!applicationId || !clientToken) return;

    Promise.all([
      import('@datadog/browser-rum'),
      import('@datadog/browser-rum-react'),
    ]).then(([{ datadogRum }, { reactPlugin }]) => {
      if (datadogRum.getInitConfiguration()) return;

      datadogRum.init({
        applicationId,
        clientToken,
        site: 'datadoghq.eu',
        service: 'yannova',
        env: process.env.NODE_ENV,
        version: '1.0.0',
        sessionSampleRate: 100,
        sessionReplaySampleRate: 20,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input',
        plugins: [reactPlugin({ router: true })],
      });
    });
  }, []);

  return null;
}
