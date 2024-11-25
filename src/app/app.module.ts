import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './autocertification/confirmation/confirmation.component';
import { FormStep1Component } from './autocertification/form-step1/form-step1.component';
import { FormStep2Component } from './autocertification/form-step2/form-step2.component';
import { FormStep3Component } from './autocertification/form-step3/form-step3.component';
import { FormStep4Component } from './autocertification/form-step4/form-step4.component';
import { FormStep5Component } from './autocertification/form-step5/form-step5.component';
import { HomeComponent } from './autocertification/home/home.component';
import { SummaryComponent } from './autocertification/summary/summary.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './autocertification/navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    SummaryComponent,
    FormStep1Component,
    FormStep2Component,
    FormStep3Component,
    FormStep4Component,
    FormStep5Component,
    ConfirmationComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,   
     MatButtonToggleModule,MatSlideToggleModule ,
    MatIconModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
   TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }), 
   


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

  providers: [  provideHttpClient(withInterceptorsFromDi()),  { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }, // French locale
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
