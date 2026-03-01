import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

import { HomeComponent } from './pages/home/home.component';
import { PrecosComponent } from './pages/precos/precos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { SuporteComponent } from './pages/suporte/suporte.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'suporte', component: SuporteComponent },
      { path: 'precos', component: PrecosComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'creditos', component: CreditosComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];
