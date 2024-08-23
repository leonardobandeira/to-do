import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UsuarioCardComponent } from './usuario-card/usuario-card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, UsuarioCardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
