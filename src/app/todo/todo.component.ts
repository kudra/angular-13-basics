import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, mergeMap, of } from 'rxjs';
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
  myObj: TODO;
  fkey = '';
  ofObs$ = of(1, 2, 3);
  constructor(private apiservice: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiservice.getTodoApi().subscribe((res) => {
      this.myArray = res;
    });
    this.ofObs$
      .pipe(mergeMap((res) => this.apiservice.getTodoApiById(res)))
      .subscribe((res) => {
        this.myObj = res;
      });

    forkJoin([
      this.apiservice.getTodoApi(),
      this.apiservice.getTodoApiById(1),
    ]).subscribe((res) => {
      console.log('forkjoin', res);
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
