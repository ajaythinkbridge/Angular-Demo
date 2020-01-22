import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ToDoService implements OnInit {
  demoUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  public getToDosFromApi() {
    return this.http.get(this.demoUrl + '?_limit=3');
  }

  public sendDataToApi(data) {
    return this.http.post(this.demoUrl, data);
  }

}
