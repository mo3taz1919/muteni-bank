import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private languageService: LanguageService) {}

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }
}
