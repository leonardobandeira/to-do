import { Component } from '@angular/core';
import { ContentTitleComponent } from '../../../shared/content-title/content-title.component';
import { CartaoProgressoComponent } from '../../../shared/cartao-progresso/cartao-progresso.component';
import { ModalTarefaComponent } from "../../../shared/modal-tarefa/modal-tarefa.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContentTitleComponent, CartaoProgressoComponent, ModalTarefaComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
