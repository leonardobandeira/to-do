import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  @Input() modo: boolean = false;

  get classes(): string {
    return `brand ${this.modo ? 'modo' : ''}`;
  }
}
