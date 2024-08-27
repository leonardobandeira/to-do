import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})

export class GraficoComponent {
  data: any[] = [
    { name: 'Tarefas Concluídas', value: 10 },
    { name: 'Tarefas Concluídas', value: 15 },
  ];
}
