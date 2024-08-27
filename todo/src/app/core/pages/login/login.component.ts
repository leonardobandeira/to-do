import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from "../../../components/home/brand/brand.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, BrandComponent]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
}
