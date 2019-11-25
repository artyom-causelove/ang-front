import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: Object;

  @Output() onDeleted = new EventEmitter();

  id      : number;
  name    : string;
  surname : string;
  age     : string;
  city    : string;

  constructor() { 
    
  }

  ngOnInit() {
    this.id = this.user['id'];
    this.name = this.user['name'];
    this.surname = this.user['surname'];
    this.city = this.user['city'];
    this.age = this.user['age'];
  }

  deleteUser() {

    fetch('http://127.0.0.2:228/api/users/' + this.id.toString(), {
      method: 'DELETE'
    })
      .then(async res => {
        this.onDeleted.emit()
      })
  }
}
