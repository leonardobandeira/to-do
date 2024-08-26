import { Component } from '@angular/core';
import { BotaoComponent } from '../../../shared/botao/botao.component';

@Component({
  selector: 'app-modal-tarefa',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './modal-tarefa.component.html',
  styleUrl: './modal-tarefa.component.css'
})
export class ModalTarefaComponent {
  openModal(): void {
    const isModal = document.getElementById('staticBackdrop');
    if (isModal) {
      const modal = new bootstrap.Modal(isModal);
      modal.show();
    }
  }
}
