import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(), // Add HTTP client if your app needs it
    providePrimeNG({
      theme: {
        preset: Aura
      },
      ripple: true, // Enable ripple effects
      zIndex: {
        modal: 1100, // Default PrimeNG z-index settings
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
      }
    })
  ]
};