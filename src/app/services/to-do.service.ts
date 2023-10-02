import { Injectable, inject } from '@angular/core';
import { UseQuery } from '@ngneat/query';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ToDoService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);

  getToDos() {
    return this.useQuery(['TO_DOS'], () => {
      return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
    });
  }

  getToDo(id: number) {
    return this.useQuery(['TO_DO', id], () => {
      return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    });
  }
}
