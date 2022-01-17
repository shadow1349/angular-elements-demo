import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  @Input() buttonText: string = 'Submit your contact form';

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
