import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output() formData = new EventEmitter<{
    firstName: string;
    lastName: string;
    email: string;
    comments: string;
  }>();

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    comments: new FormControl(''),
  });

  submit() {
    if (this.contactForm.invalid) {
      alert('Please fill in the form');
      return;
    } else {
      this.formData.emit({
        firstName: this.contactForm.controls['firstName'].value,
        lastName: this.contactForm.controls['lastName'].value,
        email: this.contactForm.controls['email'].value,
        comments: this.contactForm.controls['comments'].value,
      });
    }
  }
}
