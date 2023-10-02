import { QueryClientService } from '@ngneat/query';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.scss'],
})
export class ToDoComponent implements OnInit {
  private queryClient = inject(QueryClientService);
  todo$: any;

  constructor() {
    const response = this.queryClient.getQueryData<any>(['TO_DOS']);
    this.todo$ = response;
  }

  ngOnInit(): void {
    console.log(this.todo$);
  }
}
