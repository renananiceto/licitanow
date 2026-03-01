import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
@Component({
  selector: 'app-creditos',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent { }
