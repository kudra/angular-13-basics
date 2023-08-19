import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
export interface TODO {
  userId: number;
  id: number;
  title: string;
  completed: string;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  myArray: TODO[] = [];
  fkey = '';
  constructor(private apiservice: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiservice.getTodoApi().subscribe((res) => {
      this.myArray = res;
    });
  }
  openTodo(data: TODO) {
    const goto = `gocomp/${data.id}`;
    this.router.navigate([goto, { name: 'raghvendra', place: 'kudra' }], {
      queryParams: { name: 'ranu', place: 'basahi' },
    });
  }
  typing(evt: Event) {
    this.fkey = (evt.target as HTMLInputElement).value;
  }
}
