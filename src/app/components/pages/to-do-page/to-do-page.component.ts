import { ToDoService } from './../../../services/to-do.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.scss'],
})
export class ToDoComponent implements OnInit {
  todo$: any;

  constructor(toDoService: ToDoService) {
    const response = toDoService.getToDos().result$;
    response.subscribe((data: any) => {
      this.todo$ = data.data;
    });
  }

  ngOnInit(): void {}
}
