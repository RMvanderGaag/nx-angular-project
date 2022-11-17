import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      name: "Bert",
      city: "Breda",
      email: "bert@mail.com"
    },
    {
      id: 1,
      name: "Jan",
      city: "Amsterdam",
      email: "jan@mail.com"
    },
    {
      id: 2,
      name: "Simon",
      city: "Rotterdam",
      email: "simon@mail.com"
    },
  ]

  constructor() { }

  getUsers(): User[] {
    console.log(this.users.length + " users returned")
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.filter(x => x.id == id)[0];
  }
}
