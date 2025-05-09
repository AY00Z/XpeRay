// app.routes.ts
import { Routes } from '@angular/router';
import { PageModificationComponent } from './page-modification/page-modification.component';
import { PagePatientsComponent } from './page-patients/page-patients.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Header } from 'primeng/api';
import { HeaderComponent } from './header/header.component';
import { ModelComponent } from './model/model.component';

export const routes: Routes = [
  { 
    path: 'modification', 
    component: PageModificationComponent 
  },
  { 
    path: 'patients',
    component: PagePatientsComponent
  },
  { 
    path: '', 
    redirectTo: '/patients', 
    pathMatch: 'full' 
  },
  { 
    path: 'admin', 
    component: AdminPageComponent
  },
  { 
    path: 'dashboard', 
    component: PageDashboardComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'signup', 
    component: SignupComponent
  },

  { 
    path: 'home', 
    component: HeaderComponent
  },
  { 
    path: 'xperay', 
    component: ModelComponent
  },
];