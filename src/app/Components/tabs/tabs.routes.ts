import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
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
        redirectTo: '/tabs/reps',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/reps',
    pathMatch: 'full',
  },
];
