import { Component } from '@angular/core';
import { SidebarComponent } from '../../template/sidebar/sidebar.component';
import { HeaderComponent } from '../../template/header/header.component';
import { ContentComponent } from '../../template/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
