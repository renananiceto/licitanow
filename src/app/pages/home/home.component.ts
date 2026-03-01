import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
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
export class HomeComponent implements AfterViewInit {

  @ViewChild('ctaCard') ctaCard!: ElementRef;

  ngAfterViewInit() {
    const card = this.ctaCard.nativeElement;

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  }
  categories = [
    {
      icon: 'assets/icons/construction.svg',
      title: 'Concursos de Construção',
      description: 'Publique concursos para obras novas, remodelações, legalizações ou ampliações, e encontre as melhores empresas para o seu projeto.'
    },
    {
      icon: 'assets/icons/file.svg',
      title: 'Concursos de Serviços',
      description: 'Gestão de obra, fiscalização, arquitetura, engenharia, topografia e outros serviços técnicos, tudo com total transparência e controlo.'
    },
    {
      icon: 'assets/icons/group.svg',
      title: 'Concursos de Subcontratação',
      description: 'EEncontre subempreiteiros especializados para fases específicas da contrução desde estruturas a acabamentos.'
    },
    {
      icon: 'assets/icons/others.svg',
      title: 'Outros',
      description: 'Organize concursos para o aluguer de equipamentos, fornecimento de materiais de construção ou qualquer outra necessidade do setor.'
    }
  ];
  principles = [
    {
      icon: 'assets/icons/file.svg',
      title: 'Sem Subscrição',
      description: 'Pague apenas pelo que utiliza. Sem taxas ocultas, sem encargos recorrentes, sem compromissos'
    },
    {
      icon: 'assets/icons/shield.svg',
      title: 'Transparência',
      description: 'Visibilidade total sobre todos os processos, preços e progresso dos projetos. O que vê é exatamente o que obtém'
    },
    {
      icon: 'assets/icons/gift.svg',
      title: 'Criar Concursos Grátis',
      description: 'Inicie o seu concurso sem custos. Obtenha propostas competitivas de empreiteiros qualificados sem taxas iniciais'
    },
    {
      icon: 'assets/icons/group.svg',
      title: 'Colaboradores',
      description: 'Adira ao nosso programa de colaboradores e receba uma percentagem dos créditos utilizados pelos convidados que trouxe para a plataforma'
    }
  ];
  steps = [
    {
      icon: 'assets/icons/file2.svg',
      title: 'Criar Concurso',
      description: 'Publique o seu projeto com todos os requisitos detalhados'
    },
    {
      icon: 'assets/icons/clock2.svg',
      title: 'Receber Propostas',
      description: 'Os interessados apresentam propostas'
    },
    {
      icon: 'assets/icons/trophy.svg',
      title: 'Vencedor Automático',
      description: 'A proposta mais baixa é selecionada automaticamente'
    },
    {
      icon: 'assets/icons/chat.svg',
      title: 'Pós Concurso',
      description: 'Comunique e partilhe ficheiros através da plataforma'
    }
  ];
}


