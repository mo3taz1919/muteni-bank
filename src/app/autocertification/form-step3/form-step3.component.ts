import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-step3',
  templateUrl: './form-step3.component.html',
  styleUrls: ['./form-step3.component.scss']
})
export class FormStep3Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router  ,  private dataService: DataService
  ) {
    this.form = this.fb.group({
      usResident: [false],
      usCitizen: [false]
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.dataService.taxResidenceInfo);

  }

  nextStep(): void {
    if (this.form.valid) {
      this.dataService.setTaxResidenceInfo(this.form.value);
      console.log("Tax Residence Info saved:", this.form.value);
      this.router.navigate(['/form-step4']);
    }
  }
  
  previousStep(): void {
    this.router.navigate(['/form-step2']);
  }
}
