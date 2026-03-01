import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
@Component({
  selector: 'app-suporte',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.scss']
})
export class SuporteComponent { mode: 'contact' | 'demo' = 'demo'; }
