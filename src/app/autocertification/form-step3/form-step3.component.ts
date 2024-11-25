import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-step3',
  templateUrl: './form-step3.component.html',
  styleUrls: ['./form-step3.component.scss']
})
export class FormStep3Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router ) {
    this.form = this.fb.group({
      usResident: [false, Validators.required],
      usCitizen: [false, Validators.required]
    });
  }

  ngOnInit(): void {
    const storedData = JSON.parse(localStorage.getItem('step3Data') || '{}');
    if (storedData) {
      this.form.patchValue(storedData);
    }
    console.log("Initial Residence info in form:", this.form.value);
  
  }

  nextStep(): void {
    if (this.form.valid) {
      localStorage.setItem('step3Data', JSON.stringify(this.form.value));
      console.log('Step 3 Data Saved:', this.form.value);
      this.router.navigate(['/form-step4']);
    } else {
      console.error('Step 3 Form is invalid:', this.form.value);
    }
  }
  onToggleChange(controlName: string, value: boolean): void {
    this.form.get(controlName)?.setValue(value);
  }
  previousStep(): void {
    this.router.navigate(['/form-step2']);
  }
}
