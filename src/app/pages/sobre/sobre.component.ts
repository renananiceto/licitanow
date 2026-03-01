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
      icon: 'assets/icons/heart.svg',
      title: 'Transparência',
      description: 'Operamos com total clareza em todos os processos, garantindo confiança entre todas as partes envolvidas.'
    },
    {
      icon: 'assets/icons/group.svg',
      title: 'Colaboração',
      description: 'Acreditamos no poder das parcerias. Promovemos um ambiente onde clientes, fornecedores e profissionais trabalham em conjunto para alcançar os melhores resultados.'
    },
    {
      icon: 'assets/icons/medal.svg',
      title: 'Excelência',
      description: 'Comprometemo-nos a oferecer um serviço de qualidade superior, assegurando rigor técnico e profissionalismo em todas as interações.'
    },
    {
      icon: 'assets/icons/internet.svg',
      title: 'Inovação',
      description: 'Utilizamos tecnologia de ponta para revolucionar a forma como os concursos e projetos de construção são geridos em Portugal.'
    }
  ];
}
