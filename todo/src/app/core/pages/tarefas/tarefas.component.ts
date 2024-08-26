import { Component } from '@angular/core';
import { ContentTitleComponent } from "../../../components/home/content-title/content-title.component";
import { ContentComponent } from "../../template/content/content.component";
import { BreadcrumbComponent } from "../../../components/home/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [ContentTitleComponent, ContentComponent, BreadcrumbComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

}
