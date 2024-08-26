import { Component } from '@angular/core';
import { ModalTarefaComponent } from '../modal-tarefa/modal-tarefa.component';

@Component({
  selector: 'app-content-title',
  standalone: true,
  imports: [ModalTarefaComponent],
  templateUrl: './content-title.component.html',
  styleUrl: './content-title.component.css'
})
export class ContentTitleComponent {

}