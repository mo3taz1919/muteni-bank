import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './autocertification/confirmation/confirmation.component';
import { FormStep1Component } from './autocertification/form-step1/form-step1.component';
import { FormStep2Component } from './autocertification/form-step2/form-step2.component';
import { FormStep3Component } from './autocertification/form-step3/form-step3.component';
import { FormStep4Component } from './autocertification/form-step4/form-step4.component';
import { FormStep5Component } from './autocertification/form-step5/form-step5.component';
import { SummaryComponent } from './autocertification/summary/summary.component';
import { HomeComponent } from './autocertification/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-step1', component: FormStep1Component },
  { path: 'form-step2', component: FormStep2Component },
  { path: 'form-step3', component: FormStep3Component },
  { path: 'form-step4', component: FormStep4Component },
  { path: 'form-step5', component: FormStep5Component },
  { path: 'summary', component: SummaryComponent},
  { path: 'confirmation', component: ConfirmationComponent},
  { path: '**', redirectTo: '' }                          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
