import { Component, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  isMobileMenuOpen = false;
 

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToLogin() {
    this.viewportScroller.scrollToAnchor('login-section');
    // Alternative smooth scrolling:
    document.getElementById('login-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngAfterViewInit() {
    // Initialize parallax effect if needed
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth > 799 && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }
}