import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PatientListComponent } from '../patient-list/patient-list.component';

@Component({
  selector: 'app-page-patients',
  imports: [SidebarComponent,
          PatientListComponent
  ],
  templateUrl: './page-patients.component.html',
  styleUrl: './page-patients.component.scss'
})
export class PagePatientsComponent {

}
