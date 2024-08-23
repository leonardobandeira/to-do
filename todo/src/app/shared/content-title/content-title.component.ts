import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-content-title',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './content-title.component.html',
  styleUrl: './content-title.component.css'
})
export class ContentTitleComponent {

}
