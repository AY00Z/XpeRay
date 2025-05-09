import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { PageModificationComponent } from './page-modification/page-modification.component';
import { PagePatientsComponent } from './page-patients/page-patients.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ModelComponent } from './model/model.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    PagePatientsComponent,
    PageModificationComponent,
    SidebarComponent,
    AdminPageComponent,
    DashboardComponent,
    HeaderComponent,
    ModelComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'XpeRay';
}