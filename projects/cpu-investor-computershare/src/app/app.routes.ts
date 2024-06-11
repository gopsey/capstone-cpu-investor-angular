import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      loadComponent: () => import('./features/portfolio/portfolio.component').then((x) => x.PortfolioComponent),
   },
   {
      path: 'portfolio',
      loadComponent: () => import('./features/portfolio/portfolio.component').then((x) => x.PortfolioComponent),
   },
   {
      path: 'activity',
      loadComponent: () => import('./features/activity/activity.component').then((x) => x.ActivityComponent),
   },
   {
      path: 'account',
      loadComponent: () => import('./features/account/account.component').then((x) => x.AccountComponent),
   },
];
