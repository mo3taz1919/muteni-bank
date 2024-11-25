import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  deceasedInfo: any;
  personalInfo: any;
  taxResidenceInfo: any;
  taxIdentificationInfo: any;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.deceasedInfo = JSON.parse(localStorage.getItem('step1Data') || '{}');
    this.personalInfo = JSON.parse(localStorage.getItem('step2Data') || '{}');
    this.taxResidenceInfo = JSON.parse(localStorage.getItem('step5Data') || '{}');
    console.log('Tax Residence Info:', this.taxResidenceInfo);
  }

  editSection(section: string): void {
    if (section === 'deceased') {
      this.router.navigate(['/form-step1']);
    } else if (section === 'personal') {
      this.router.navigate(['/form-step2']);
    } else if (section === 'taxIdentification') {
      this.router.navigate(['/form-step5']);
    }

  }
  previousStep(): void {
    this.router.navigate(['/form-step4']);
  }
  validate(): void {
    alert('Data validated');
    this.router.navigate(['/confirmation']);
  }
}
