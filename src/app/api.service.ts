import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO } from './todo/todo.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpclient: HttpClient) {}
  getTodoApi() {
    return this.httpclient.get<TODO[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
