import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolios',
    pathMatch: 'full',
  },
  {
    path: 'portfolios',
    loadComponent: () =>
      import('./features/portfolios/portfolio-list/portfolio-list').then(
        (m) => m.PortfolioListComponent,
      ),
  },
  {
    path: 'portfolios/:id/analytics',
    loadComponent: () =>
      import('./features/analytics/analytics-dashboard/analytics-dashboard').then(
        (m) => m.AnalyticsDashboard,
      ),
  },
  {
    path: '**',
    redirectTo: 'portfolios',
  },
];
