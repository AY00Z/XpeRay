import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [MatIconModule], // Add this
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  @Input() patient: {
    id: string;
    name: string;
    imageUrl: string;
    pdfUrl: string;
    xrayDescription: string;
    lastVisit: string;
  } = { // Add default values to fix TS2564
    id: '',
    name: '',
    imageUrl: '',
    pdfUrl: '',
    xrayDescription: '',
    lastVisit: ''
  };
}