import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, Token } from '../auth.model';
import { AuthService } from '../auth.service';
import { UserService } from '../../../../user/src/lib/user.service';

@Component({
  selector: 'concert-project-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData: Auth = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  onSubmit(loginForm: NgForm): void {
    this.authService.loginUser(loginForm.value).subscribe((token: Token) => {
      localStorage.setItem('token', JSON.stringify(token));
      this.userService.getSelf().subscribe((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      });
      this.router.navigate(['users'])
    });
  }
}
