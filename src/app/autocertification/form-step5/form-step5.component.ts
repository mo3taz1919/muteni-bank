import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'country-state-city';

@Component({
  selector: 'app-form-step5',
  templateUrl: './form-step5.component.html',
  styleUrls: ['./form-step5.component.scss'],
})
export class FormStep5Component implements OnInit {
  form: FormGroup;
  countries: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      country: ['', Validators.required],
      nif: ['Non demandé'],
    });
  }

  ngOnInit(): void {
    const storedData = localStorage.getItem('step5Data');
    if (storedData) {
      this.form.patchValue(JSON.parse(storedData));
    }
    console.log('Initial Identification info in form:', this.form.value);
    this.loadCountries();
    console.log('country:', this.loadCountries);

  }
  loadCountries(): void {
    this.countries = Country.getAllCountries();

    console.log('country:', this.countries);
  }
  previousStep(): void {
    this.router.navigate(['/form-step4']);
  }
  nextStep(): void {
    if (this.form.valid) {
      localStorage.setItem('step5Data', JSON.stringify(this.form.value));
      console.log('Step 5 Data Saved:', this.form.value);
      this.router.navigate(['/summary']);
    } else {
      console.error('Step 5 Form is invalid:', this.form.value);
    }
  }
}
