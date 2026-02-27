import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-number',
  standalone: true,
  templateUrl: './cardNumber.component.html',
  styleUrls: ['./cardNumber.component.scss']
})
export class CardNumberComponent {
  @Input() icon: string = '';
  @Input() number: string | number = '';
  @Input() label: string = '';
}
