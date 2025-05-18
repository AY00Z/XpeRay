import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  uploadForm: FormGroup;
  submitted = false;
  loading = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  analysisResult: string | null = null;
  errorMessage: string | null = null;
  apiUrl = 'https://9b93-34-31-124-178.ngrok-free.app/upload';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.uploadForm = this.fb.group({
      file: [null]
    });
  }

  onFileChange(event: any) {
    this.resetAnalysis();
    const file = event.target.files[0];
    
    if (!file) return;

    // Validate file type
    if (!file.type.match(/image\/(jpeg|png|jpg)/i)) {
      this.errorMessage = 'Only JPEG/PNG images are allowed';
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      this.errorMessage = 'File size must be less than 5MB';
      return;
    }

    this.selectedFile = file;
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => this.imagePreview = reader.result;
    reader.onerror = () => this.errorMessage = 'Error previewing image';
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
    this.analysisResult = null;

    if (!this.selectedFile) {
      this.errorMessage = 'Please select an image file';
      return;
    }

    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>(this.apiUrl, formData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('API Error:', error);
          this.errorMessage = this.getErrorMessage(error);
          this.loading = false;
          return throwError(() => new Error(this.errorMessage || 'Unknown error'));
        })
      )
      .subscribe({
        next: (response) => {
          if (response?.generated_caption) {
            this.analysisResult = response.generated_caption;
          } else if (response?.error) {
            this.errorMessage = response.error;
          } else {
            this.errorMessage = 'Received unexpected response from server';
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.status === 0) {
      return 'Network error: Could not connect to the analysis service';
    } else if (error.status >= 400 && error.status < 500) {
      return `Client error: ${error.error?.error || error.message}`;
    } else if (error.status >= 500) {
      return 'Server error: The analysis service is currently unavailable';
    }
    return 'An unexpected error occurred during analysis';
  }

  resetAnalysis() {
    this.analysisResult = null;
    this.errorMessage = null;
  }

  downloadReport() {
    if (!this.analysisResult) return;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.analysisResult));
    element.setAttribute('download', `xperay-report-${new Date().getTime()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
