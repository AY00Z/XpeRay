import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-page-dashboard',
  imports: [DashboardComponent,
            AdminSidebarComponent
  ],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {

}
