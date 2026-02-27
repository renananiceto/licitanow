import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNumberComponent } from '../../shared/components/cardNumber/cardNumber.component';
import { ButtonComponent } from '../../shared/components/button/button.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardNumberComponent, ButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories = [
    {
      icon: 'assets/icons/construction.png',
      title: 'Concursos de Construção',
      description: 'Publique concursos para obras novas, remodelações e ampliações.'
    },
    {
      icon: 'assets/icons/services.png',
      title: 'Concursos de Serviços',
      description: 'Gestão de obra, arquitetura, engenharia e fiscalização.'
    },
    {
      icon: 'assets/icons/subcontract.png',
      title: 'Concursos de Subcontratação',
      description: 'Encontre subempreiteiros especializados para fases específicas.'
    },
    {
      icon: 'assets/icons/others.png',
      title: 'Outros',
      description: 'Organize concursos para aluguer de equipamentos e fornecimento.'
    }
  ];
  steps = [
    {
      icon: 'assets/icons/create.png',
      title: 'Criar Concurso',
      description: 'Publique o seu projeto com todos os requisitos detalhados'
    },
    {
      icon: 'assets/icons/time.png',
      title: 'Receber Propostas',
      description: 'Os interessados apresentam propostas'
    },
    {
      icon: 'assets/icons/trophy.png',
      title: 'Vencedor Automático',
      description: 'A proposta mais baixa é selecionada automaticamente'
    },
    {
      icon: 'assets/icons/chat.png',
      title: 'Pós Concurso',
      description: 'Comunique e partilhe ficheiros através da plataforma'
    }
  ];
}

