import { Component, OnInit } from '@angular/core';
import { async } from 'q';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<Object>;

  constructor() { 
    
  }

  identifyUser(index, user) {
    return user.id
  }

  ngOnInit() {
   this.fetchUsers(); 
  }

  fetchUsers() {
    fetch('http://127.0.0.2:228/api/users')
      .then(async res => {
        this.users = await res.json();
      });
  }
}
