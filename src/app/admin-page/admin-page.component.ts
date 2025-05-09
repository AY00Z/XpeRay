import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-admin-page',
  imports: [AdminSidebarComponent,
           UserListComponent
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

}
