import {Routes} from '@angular/router';
import {HolidayComponent} from './features/holiday/holiday.component';

export const routes: Routes = [
  {
    path: '',
    component: HolidayComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/holiday/holiday.component').then(m => m.HolidayComponent)
      }
    ]
  }
];
