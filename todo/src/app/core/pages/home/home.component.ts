import { Component } from '@angular/core';
import { ContentComponent } from "../../template/content/content.component";
import { CartaoProgressoComponent } from "../../../components/home/cartao-progresso/cartao-progresso.component";
import { GraficoComponent } from "../../../components/home/grafico/grafico.component";
import { ContentTitleComponent } from "../../../components/home/content-title/content-title.component";
import { ApiService } from '../../../api-service.service';
import { Tarefa } from '../../Tarefa';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentComponent, CartaoProgressoComponent, GraficoComponent, ContentTitleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tarefas: Tarefa[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.postTarefa({
      "id": "2143",
      "tarefa": "Implementar autenticação com JWT",
      "descricao": "segurança",
      "concluido": "1"
    }).then(response => {
      this.tarefas = response.data;
    });

  }
}
