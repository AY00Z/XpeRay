import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: {
    id: string;
    fullName: string;
    imageUrl: string;
    email: string;
    location: string;
    active: boolean;
  } = {
    id: '',
    fullName: '',
    imageUrl: '',
    email: '',
    location: '',
    active: false
  };

  sendMessage() {
    // Implement message functionality
    console.log('Message sent to:', this.user.email);
  }
}