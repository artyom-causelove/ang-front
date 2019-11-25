import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blank-user',
  templateUrl: './blank-user.component.html',
  styleUrls: ['./blank-user.component.scss']
})
export class BlankUserComponent implements OnInit {

  @Output() onCreatedUser = new EventEmitter();

  name: string = '';
  surname: string = '';
  age: string = '';
  city: string = '';

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    const formData = new FormData();
    
    formData.append('name', this.name);
    formData.append('surname', this.surname);
    formData.append('age', this.age);
    formData.append('city', this.city);

    fetch('http://127.0.0.2:228/api/users', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        this.onCreatedUser.emit();
      });
  }

}
