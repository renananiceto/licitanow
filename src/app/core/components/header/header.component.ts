import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent { }
