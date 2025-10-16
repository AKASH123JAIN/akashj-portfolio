// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // We'll create this next

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(), provideAnimationsAsync()
  ]
};