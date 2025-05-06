import { Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'reps',
        loadComponent: () =>
          import('../representatives/representatives.page').then((m) => m.RepresentativesPage),
      },
      {
        path: 'elections',
        loadComponent: () =>
          import('../elections/elections.page').then((m) => m.ElectionsPage),
      },
      {
        path: '',
        redirectTo: '/dashboard/reps',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/reps',
    pathMatch: 'full',
  },
];
