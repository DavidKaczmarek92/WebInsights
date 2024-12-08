import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
