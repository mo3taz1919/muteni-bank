import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Country } from 'country-state-city';

@Component({
  selector: 'app-form-step2',
  templateUrl: './form-step2.component.html',
  styleUrls: ['./form-step2.component.scss']
})
export class FormStep2Component implements OnInit {
  form: FormGroup;
  countries: any[] = [];
  today: Date = new Date(); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      usageName: [''],
      firstName: ['', Validators.required],
      birthDate: ['', Validators.required],
      birthCity: ['', Validators.required],
      birthCountry  : ['', Validators.required],  

      mainAddress: ['', Validators.required],
      addressComplement: [''],
  
      city: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
    });
  }

  ngOnInit(): void {
  //  this.form.patchValue(this.dataService.deceasedInfo);
    this.loadCountries();

  }
  loadCountries(): void {
    this.countries = Country.getAllCountries();
  }
  previousStep(): void {
    this.router.navigate(['/form-step1']);
  }

  



  nextStep(): void {
    if (this.form.valid) {
      this.dataService.setPersonalInfo(this.form.value);
      console.log("Personal Info saved in DataService:", this.dataService.personalInfo);
     // this.router.navigate(['/form-step3']);
    }
  }
  
}
