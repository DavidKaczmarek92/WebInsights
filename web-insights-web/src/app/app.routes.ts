import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
