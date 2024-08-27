import { Injectable } from '@angular/core';
import axios from 'axios';
import { Tarefa } from './core/Tarefa';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor() {}

  postTarefa(tarefa:Tarefa) {
    return axios.post(`${this.baseUrl}/tarefas`, tarefa);
  }

  getTarefas() {
    return axios.get(`${this.baseUrl}/tarefas`);
  }
}
