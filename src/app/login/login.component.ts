import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false]
  });

  loading = false;
  submitted = false;
  showPassword = false;

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Simulate API call
    setTimeout(() => {
      // Here you would typically call your authentication service
      console.log('Login credentials:', {
        email: this.f['email'].value,
        password: this.f['password'].value,
        rememberMe: this.f['rememberMe'].value,
      });

      this.loading = false;
      // Handle successful login (e.g., redirect to dashboard)
    }, 1500);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}