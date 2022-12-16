import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Auth, Token } from "./auth.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(private http: HttpClient) { }

    registerUser(userData: Auth): Observable<Auth> {
        return this.http.post<Auth>('http://localhost:3333/auth-api/register', userData, { headers: this.headers })
    }

    loginUser(userData: Auth) {
        return this.http.post<Token>('http://localhost:3333/auth-api/login', userData, { headers: this.headers })
    }
}