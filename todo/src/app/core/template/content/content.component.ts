import { Component } from '@angular/core';
import { ContentTitleComponent } from '../../../shared/content-title/content-title.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContentTitleComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
