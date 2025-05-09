// patient-list.component.ts
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  patients = [
    {
      id: '1',
      name: 'Aziz Souid',
      imageUrl: 'https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?cb=iwc1&rs=1&pid=ImgDetMain',
      xrayImageUrl: 'https://static.turbosquid.com/Preview/2014/07/06__19_51_08/1.jpg26047687-7f62-4cf7-b196-083682973f07Zoom.jpg',
      xrayDescription: 'Chest CT. Chest CT shows an irregular contours mass in anterior mediastinum with mild heterogenetic enhancement (white arrow)',
      lastVisit: '2025-05-15'
    },
    {
      id: '1',
      name: 'Fakhri Mahfoudh',
      imageUrl: 'https://www.rosadentalclinic.sk/app/uploads/2022/12/609A7223-scaled-e1670423396507-400x400.jpg',
      xrayImageUrl: 'https://static.turbosquid.com/Preview/2014/07/06__19_51_08/1.jpg26047687-7f62-4cf7-b196-083682973f07Zoom.jpg',
      xrayDescription: 'Normal cardiac silhouette. No pleural effusion or pneumothorax.',
      lastVisit: '2025-04-05'
    },
    {
      id: '1',
      name: 'Oussama Chabene',
      imageUrl: 'https://thumbs.dreamstime.com/b/man-white-14903934.jpg',
      xrayImageUrl: 'https://static.turbosquid.com/Preview/2014/07/06__19_51_08/1.jpg26047687-7f62-4cf7-b196-083682973f07Zoom.jpg',
      xrayDescription: 'Bilateral upper lobe fibronodular opacities with cavitary lesions. No significant lymphadenopathy.',
      lastVisit: '2025-02-01'
    },
    // ... other patients
  ];

  showXRayModal = false;
  selectedXRayImage = '';
  selectedPatient: any = null;

  constructor(private router: Router) {}

  viewXRay(patient: any) {
    this.selectedXRayImage = patient.xrayImageUrl;
    this.selectedPatient = patient;
    this.showXRayModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showXRayModal = false;
    document.body.style.overflow = '';
  }

// patient-list.component.ts
modifyPatient(patient: any) {
 
  this.router.navigate(['/modification'], {
    state: { 
      patientData: {
        name: patient.name,
        xrayDescription: patient.xrayDescription,
        
      }
    }
  });
}
}