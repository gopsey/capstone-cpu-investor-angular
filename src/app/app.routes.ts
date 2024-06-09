import { Routes } from '@angular/router';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ActivityComponent } from './features/activity/activity.component';
import { AccountComponent } from './features/account/account.component';

export const routes: Routes = [
   { path: '', component: PortfolioComponent },
   { path: 'portfolio', component: PortfolioComponent },
   { path: 'activity', component: ActivityComponent },
   { path: 'account', component: AccountComponent },
];
