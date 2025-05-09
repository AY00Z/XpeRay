import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true, // Mark as standalone
  imports: [CommonModule, MatIconModule, RouterModule], // Import required modules
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    {
      title: 'FAVORITES',
      items: [
        { name: 'Patients', icon: 'people', link: '/patients', active: false },
        { name: 'X-ray Report Editor', icon: 'edit', link: '/xray-modification', active: false }
      ]
    },
    {
      title: 'ACCOUNT',
      items: [
        { name: 'Profile Settings', icon: 'settings', link: '/profile', active: false },
        { name: 'Logout', icon: 'exit_to_app', link: '/logout', active: false }
      ]
    }
  ];

  toggleActive(item: any): void {
    this.menuItems.forEach(menu => {
      menu.items.forEach(i => i.active = false);
    });
    item.active = true;
  }
}