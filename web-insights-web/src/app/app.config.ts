import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { providers } from './auth/auth-providers';
import { environment } from '../environments/environment';
import { ENV_CONFIG } from '../environments/environment-config.token';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ENV_CONFIG, useValue: environment },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    ...providers,
    provideRouter(routes),
  ],
};
