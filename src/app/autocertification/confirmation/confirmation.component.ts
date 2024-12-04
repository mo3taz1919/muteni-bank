import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent{

  constructor(private router: Router) {}

  goToHome(): void {
    localStorage.clear();
    this.router.navigate(['/home']); 
  }

}
