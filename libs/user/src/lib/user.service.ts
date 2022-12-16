import { Injectable } from '@angular/core';
import { User } from '@concert-project/user';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      name: "Bert",
      city: "Breda",
      email: "bert@mail.com",
      birthday: new Date("05/07/1998")
    },
    {
      id: 1,
      name: "Jan",
      city: "Amsterdam",
      email: "jan@mail.com",
      birthday: new Date("05/07/1998")
    },
    {
      id: 2,
      name: "Simon",
      city: "Rotterdam",
      email: "simon@mail.com",
      birthday: new Date("05/07/1998")
    },
    {
      id: 3,
      name: "Arjan",
      city: "Texel",
      email: "arjan@mail.com",
      birthday: new Date("05/07/1998")
    },
    {
      id: 4,
      name: "Lisa",
      city: "Tilburg",
      email: "lisa@mail.com",
      birthday: new Date("05/07/1998")
    }
  ]

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3333/data-api/users').pipe(
      map((users: User[]) => {
        return users.map((user: User) => {
          return {
            ...user,
            birthday: new Date(user.birthday)
          }
        })
      })
    );
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>('http://localhost:3333/data-api/users/' + id);
  }

  getSelf(): Observable<User> {
    const token = JSON.parse(localStorage.getItem('token') || '').token;
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: `${token}`,
    });
    return this.http.get<User>('http://localhost:3333/data-api/users/self', { headers });
  }

  deleteUser(id: string): Observable<any> {
    console.log(id);
    return this.http.delete('http://localhost:3333/data-api/users/' + id);
  }

  addUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post('http://localhost:3333/data-api/users', user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put('http://localhost:3333/data-api/users/' + user.id, user);
  }
} 
