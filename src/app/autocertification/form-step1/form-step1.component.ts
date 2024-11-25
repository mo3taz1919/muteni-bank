import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.scss'],
})
export class FormStep1Component implements OnInit {
  form: FormGroup;
  today: Date = new Date();

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthDate: ['', Validators.required],
      clientNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
    });
  }

  ngOnInit(): void {
    const storedData = localStorage.getItem('step1Data');
    if (storedData) {
      this.form.patchValue(JSON.parse(storedData));
    }
    console.log('Initial deceased info in form:', this.form.value);
  }
  previousStep(): void {
    this.router.navigate(['/home']);
  }
  nextStep(): void {
    if (this.form.valid) {
      localStorage.setItem('step1Data', JSON.stringify(this.form.value));
      console.log('Step 1 Data:', this.form.value);
      this.router.navigate(['/form-step2']);
    }
  }
}
