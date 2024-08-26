import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Output() clicked = new EventEmitter<void>();
  @Input() texto: string = 'Nova Tarefa';
  @Input() tipo: 'add' | 'normal' = 'add';

  get botaoClass() {
    return `--botao-${this.tipo}`;
  }

  onClick(): void {
    this.clicked.emit();
  }
}
