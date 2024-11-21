
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.scss']
})
export class FormStep1Component implements OnInit {
  form: FormGroup;
  today: Date = new Date(); 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
    
  ) {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthDate: ['', Validators.required],
      clientNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
   // this.form.patchValue(this.dataService.deceasedInfo);
    console.log("Initial deceased info in form:", this.form.value);
  }
  previousStep(): void {
    this.router.navigate(['/intro']);
  }
  nextStep(): void {
    if (this.form.valid) {
      //this.dataService.setDeceasedInfo(this.form.value);
      this.router.navigate(['/form-step2']);
    
    }
  }
}

