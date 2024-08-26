import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Output() clicked = new EventEmitter<void>();
  @Input() texto: string = 'Nova Tarefa';

  onClick(): void {
    this.clicked.emit();
  }
}
