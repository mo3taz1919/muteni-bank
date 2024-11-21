import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-step4',
  templateUrl: './form-step4.component.html',
  styleUrls: ['./form-step4.component.scss']
})
export class FormStep4Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,    private dataService: DataService
  ) {
    this.form = this.fb.group({
      country: ['', Validators.required],
      nif: ['Non demandé'] // Default value as per the image
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.dataService.taxIdentificationInfo);

  }
  previousStep(): void {
    this.router.navigate(['/form-step3']);
  }
  nextStep(): void {
    if (this.form.valid) {
      this.dataService.setTaxIdentificationInfo(this.form.value);
      console.log("Tax Identification Info saved:", this.form.value);
      this.router.navigate(['/summary']);
    }
  }
  
}
