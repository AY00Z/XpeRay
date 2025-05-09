// page-modification.component.ts
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModifyComponent } from '../modify/modify.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-modification',
  standalone: true,
  imports: [ModifyComponent, SidebarComponent, CommonModule],
  templateUrl: './page-modification.component.html',
  styleUrl: './page-modification.component.scss'
})
export class PageModificationComponent {
  currentDescription: string = "";
  patientName: string = "";

  constructor() {
    const navigation = window.history.state;
    if (navigation.patientData) {
      this.currentDescription = navigation.patientData.xrayDescription;
      this.patientName = navigation.patientData.name;
    }
  }
  
}