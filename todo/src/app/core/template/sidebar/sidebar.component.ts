import { Component } from '@angular/core';
import { BrandComponent } from '../../../components/home/brand/brand.component';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [BrandComponent, LinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
