import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PrecosComponent } from './pages/precos/precos.component';
import { SobreComponent } from './pages/sobre/sobre.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'eventos', component: EventosComponent },
      { path: 'precos', component: PrecosComponent },
      { path: 'sobre', component: SobreComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
