import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth/auth.guard';
import { ModeldbComponent } from './modeldb/modeldb.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'modeldb',
    component: ModeldbComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(routes);

export class AppRoutingModule { }
