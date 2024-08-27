import { Component } from '@angular/core';
import { ContentTitleComponent } from "../../../components/home/content-title/content-title.component";
import { ContentComponent } from "../../template/content/content.component";
import { BreadcrumbComponent } from "../../../components/home/breadcrumb/breadcrumb.component";
import { TableModule } from 'primeng/table';
import { Tarefa } from '../../Tarefa';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [ContentTitleComponent, ContentComponent, BreadcrumbComponent,TableModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  cols: any[] = [
    { field: 'tarefa', header: 'Tarefa' },
    { field: 'descricao', header: 'Descrição' },
    { field: 'concluido', header: 'Concluído' }
  ];
  tarefas: Tarefa[] = [
    {
      id: '1',
      tarefa: 'Fazer compras',
      descricao: 'Comprar leite, pão e frutas no supermercado.',
      concluido: 'false'
    },
    {
      id: '2',
      tarefa: 'Estudar para a prova',
      descricao: 'Revisar os capítulos 3 e 4 do livro de matemática.',
      concluido: 'false'
    },
    {
      id: '3',
      tarefa: 'Agendar consulta médica',
      descricao: 'Ligar para o consultório do Dr. Silva para marcar uma consulta.',
      concluido: 'false'
    },
    {
      id: '4',
      tarefa: 'Lavar roupa',
      descricao: 'Separar roupas por cor e lavar na máquina.',
      concluido: 'false'
    }
  ];
}
