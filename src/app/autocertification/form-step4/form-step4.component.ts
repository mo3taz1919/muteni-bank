import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-step4',
  templateUrl: './form-step4.component.html',
  styleUrls: ['./form-step4.component.scss'],
})
export class FormStep4Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      usResident: [false, Validators.required],
      usCitizen: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    const storedData = JSON.parse(localStorage.getItem('step4Data') || '{}');
    if (storedData) {
      this.form.patchValue(storedData);
    }
    console.log('Initial Residence info in form:', this.form.value);
  }

  nextStep(): void {
    if (this.form.valid) {
      localStorage.setItem('step4Data', JSON.stringify(this.form.value));
      console.log('Step 4 Data Saved:', this.form.value);
      this.router.navigate(['/form-step5']);
    } else {
      console.error('Step 4 Form is invalid:', this.form.value);
    }
  }
  onToggleChange(controlName: string, value: boolean): void {
    this.form.get(controlName)?.setValue(value);
  }
  previousStep(): void {
    this.router.navigate(['/form-step3']);
  }
}
