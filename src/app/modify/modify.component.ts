// modify.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  @Input() initialDescription: string = '';
  editedDescription = new FormControl('');
  isBold = false;
  isItalic = false;
  isUnderline = false;
  textColor = '#000000';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.editedDescription.setValue(this.initialDescription);
  }

  toggleFormat(format: string) {
    switch(format) {
      case 'bold': this.isBold = !this.isBold; break;
      case 'italic': this.isItalic = !this.isItalic; break;
      case 'underline': this.isUnderline = !this.isUnderline; break;
    }
    this.applyFormatting();
  }

  applyFormatting() {
    const textarea = document.querySelector('.editable-area') as HTMLTextAreaElement;
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const selectedText = textarea.value.substring(startPos, endPos);
    
    if (!selectedText) return;

    let formattedText = selectedText;
    if (this.isBold) formattedText = `<strong>${formattedText}</strong>`;
    if (this.isItalic) formattedText = `<em>${formattedText}</em>`;
    if (this.isUnderline) formattedText = `<u>${formattedText}</u>`;
    if (this.textColor) formattedText = `<span style="color:${this.textColor}">${formattedText}</span>`;

    const currentValue = this.editedDescription.value || '';
    const newValue = currentValue.substring(0, startPos) + 
                    formattedText + 
                    currentValue.substring(endPos);
    
    this.editedDescription.setValue(newValue);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.selectionStart = startPos;
      textarea.selectionEnd = startPos + formattedText.length;
      textarea.focus();
    });
  }

  get safePreview(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.editedDescription.value || '');
  }

  saveChanges() {
    console.log('Saved description:', this.editedDescription.value);
    // Here you would typically call a service to save the changes
  }
}