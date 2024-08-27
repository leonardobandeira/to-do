import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; import { BotaoComponent } from '../../../shared/botao/botao.component';
import { ApiService } from '../../../api-service.service';
import { Tarefa } from '../../../core/Tarefa';

@Component({
  selector: 'app-modal-tarefa',
  standalone: true,
  imports: [BotaoComponent, FormsModule],
  templateUrl: './modal-tarefa.component.html',
  styleUrls: ['./modal-tarefa.component.css']
})
export class ModalTarefaComponent {
  constructor(private apiService: ApiService) { }

  openModal(): void {
    const isModal = document.getElementById('staticBackdrop');
    if (isModal) {
      const modal = new bootstrap.Modal(isModal);
      modal.show();
    }
  }

  closeModal(): void {
    const isModal = document.getElementById('staticBackdrop');
    if (isModal) {
      const modal = bootstrap.Modal.getInstance(isModal);
      modal.hide();
    }
  }

  salvarTarefa(form: any): void {
    if (form.valid) {
      const tarefa = form.value.tarefa;
      const descricao = form.value.descricao;

      const novaTarefa: Tarefa = {
        id: tarefa,
        tarefa: tarefa,
        descricao: descricao,
        concluido: "on"
      };
      console.log("novaTarefa", novaTarefa)

      this.apiService.postTarefa(novaTarefa)
    } else {
      console.error('Formulário inválido');
    }
  }
}
