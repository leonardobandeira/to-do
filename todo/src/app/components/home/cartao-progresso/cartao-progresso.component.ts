import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartao-progresso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartao-progresso.component.html',
  styleUrls: ['./cartao-progresso.component.css']
})
export class CartaoProgressoComponent {
  @Input() quantidade: string = '0';
  @Input() acao: string = 'todo';
  @Input() subtitulo: string = '';
  @Input() cor: string = '#B5E4FF';

}
