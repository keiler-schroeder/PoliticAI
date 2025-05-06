import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/dashboard/dashboard.routes').then((m) => m.routes),
  },
  {
    path: 'representatives',
    loadComponent: () => import('./Components/representatives/representatives.page').then( m => m.RepresentativesPage)
  },
  {
    path: 'elections',
    loadComponent: () => import('./Components/elections/elections.page').then( m => m.ElectionsPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./Components/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
];
