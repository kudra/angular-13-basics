import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-go-comp',
  templateUrl: './go-comp.component.html',
  styleUrls: ['./go-comp.component.css'],
})
export class GoCompComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.data);
  }
}
