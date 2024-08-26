import { Component } from '@angular/core';
import { ContentComponent } from "../../template/content/content.component";
import { CartaoProgressoComponent } from "../../../components/home/cartao-progresso/cartao-progresso.component";
import { GraficoComponent } from "../../../components/home/grafico/grafico.component";
import { ContentTitleComponent } from "../../../components/home/content-title/content-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentComponent, CartaoProgressoComponent, GraficoComponent, ContentTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
