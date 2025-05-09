import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users = [
    {
      id: '1',
      fullName: 'Aziz Souid',
      imageUrl: 'https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?cb=iwc1&rs=1&pid=ImgDetMain',
      email: 'azizsouid2003@gmail.com',
      location: 'Monastir',
      role: 'Radiologist',
      lastActive: '2023-06-15',
      active: true
    },
    {
      id: '2',
      fullName: 'Fakhreddine Mahfoudh',
      imageUrl: 'https://www.rosadentalclinic.sk/app/uploads/2022/12/609A7223-scaled-e1670423396507-400x400.jpg',
      email: 'FakhriMahfoudh1@gmail.com',
      location: 'Bizerte',
      role: 'Radiologist',
      lastActive: '2023-06-15',
      active: true
    },
    {
      id: '3',
      fullName: 'Oumaima Hammami',
      imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      email: 'yasmineriabi1@gmail.com',
      location: 'Manouba',
      role: 'Radiologist',
      lastActive: '2023-06-15',
      active: true
    },
   
  ];

  showConfirmModal = false;
  confirmModalTitle = '';
  confirmModalMessage = '';
  currentAction: 'delete' | 'status' | null = null;
  selectedUser: any = null;

  toggleUserStatus(user: any) {
    this.selectedUser = user;
    this.confirmModalTitle = user.active ? 'Deactivate User?' : 'Activate User?';
    this.confirmModalMessage = `Are you sure you want to ${user.active ? 'deactivate' : 'activate'} ${user.fullName}?`;
    this.currentAction = 'status';
    this.showConfirmModal = true;
  }

  deleteUser(user: any) {
    this.selectedUser = user;
    this.confirmModalTitle = 'Delete User?';
    this.confirmModalMessage = `Permanently delete ${user.fullName}'s account? This action cannot be undone.`;
    this.currentAction = 'delete';
    this.showConfirmModal = true;
  }

  confirmAction() {
    if (this.currentAction === 'delete') {
      this.users = this.users.filter(u => u.id !== this.selectedUser.id);
    } else if (this.currentAction === 'status') {
      const user = this.users.find(u => u.id === this.selectedUser.id);
      if (user) user.active = !user.active;
    }
    this.closeModal();
  }

  closeModal() {
    this.showConfirmModal = false;
    this.currentAction = null;
    this.selectedUser = null;
  }
}