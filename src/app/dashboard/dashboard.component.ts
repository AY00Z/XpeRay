import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule], // Add this import
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('locationChart') locationChartRef: any;

  topCities = [
    { name: 'Tunis', value: 420, color: '#f79502' },
    { name: 'Sfax', value: 380, color: '#f79502' },
    { name: 'Sousse', value: 310, color: '#f79502' },
    { name: 'Kairouan', value: 280, color: '#f79502' },
    { name: 'Bizerte', value: 255, color: '#f79502' },
    { name: 'Monastir', value: 210, color: '#f79502' },
    { name: 'Sousse', value: 177, color: '#f79502' },
    { name: 'Kairouan', value: 130, color: '#f79502' },
    { name: 'Bizerte', value: 111, color: '#f79502' },
    { name: 'Monastir', value: 98, color: '#f79502' },
    { name: 'Sousse', value: 67, color: '#f79502' },
    { name: 'Other', value: 55, color: '#f79502' }
  ];

  ngAfterViewInit() {
    this.createLocationChart();
  }

  createLocationChart() {
    new Chart(this.locationChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.topCities.map(c => c.name),
        datasets: [{
          label: 'Number of Users',
          data: this.topCities.map(c => c.value),
          backgroundColor: this.topCities.map(c => c.color),
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${context.raw} users`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Users'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Tunisian Cities'
            }
          }
        }
      }
    });
  }
}