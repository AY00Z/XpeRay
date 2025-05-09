import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {
  menuItems = [
    {
      title: 'FAVORITES',
      items: [
        { name: 'User Directory', icon: 'people', link: '/admin', active: false },
        { name: 'Dashboard', icon: 'dashboard', link: '/dashboard', active: false }
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
