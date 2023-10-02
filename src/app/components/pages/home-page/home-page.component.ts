import { Component } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  todo$: any;

  constructor(toDoService: ToDoService) {
    const response = toDoService.getToDos().result$;
    response.subscribe((data: any) => {
      this.todo$ = data.data;
    });
  }
}
