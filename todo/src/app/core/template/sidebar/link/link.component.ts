import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink  } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [NgClass, RouterLink ],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input() rota: string = '/';
  @Input() icone: string = '';
  @Input() texto: string = '';

  constructor(private router: Router) {}

  isRouteActive(): boolean {
    return this.router.url === this.rota;
  }
}
