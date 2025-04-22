import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, Route} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import {MainLayoutComponent} from './layout/main-layout.component';

const routes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'planner',
        loadComponent: () =>
          import('./pages/planner.component').then(m => m.PlannerComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'holidays',
        loadComponent: () =>
          import('./pages/holiday-management/holiday-management.component').then(m => m.HolidayManagementComponent)
      }
    ]
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      },
    }),
    provideRouter(routes)
  ]
};
