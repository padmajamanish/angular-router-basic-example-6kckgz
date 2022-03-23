import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  template: `
    <div>
      <h1>Home</h1>
      <h3>Total users: # {{users?.length}}</h3>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
        </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of users ">
              <td><a href="/user/:{{item.id}}">{{item.name}}</a></td>
              <td>{{item.username}}</td>
              <td>{{item.email}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class HomeViewComponent {
  users;

  constructor(private http: Http) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map((res) => res.json())
      .subscribe((res) => {
        console.warn(res);
        this.users = res;
      });
  }
}
