import { Component } from '@angular/core';
import { CartaoProgressoComponent } from '../../../components/home/cartao-progresso/cartao-progresso.component';
import { ModalTarefaComponent } from "../../../components/home/modal-tarefa/modal-tarefa.component";
import { ContentTitleComponent } from '../../../components/home/content-title/content-title.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContentTitleComponent,
    CartaoProgressoComponent,
    ModalTarefaComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
