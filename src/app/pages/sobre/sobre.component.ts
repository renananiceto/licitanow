import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  principles = [
    {
      icon: 'assets/icons/create.png',
      title: 'Sem Subscrição',
      description: 'Pague apenas pelo que utiliza. Sem taxas ocultas, sem encargos recorrentes, sem compromissos'
    },
    {
      icon: 'assets/icons/time.png',
      title: 'Transparência',
      description: 'Visibilidade total sobre todos os processos, preços e progresso dos projetos. O que vê é exatamente o que obtém'
    },
    {
      icon: 'assets/icons/trophy.png',
      title: 'Criar Concursos Grátis',
      description: 'Inicie o seu concurso sem custos. Obtenha propostas competitivas de empreiteiros qualificados sem taxas iniciais'
    },
    {
      icon: 'assets/icons/chat.png',
      title: 'Colaboradores',
      description: 'Adira ao nosso programa de colaboradores e receba uma percentagem dos créditos utilizados pelos convidados que trouxe para a plataforma'
    }
  ];
}
