import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/requests-list/requests-list.component').then(
        (m) => m.RequestsListComponent,
      ),
  },
];
