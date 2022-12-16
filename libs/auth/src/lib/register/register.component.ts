import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'concert-project-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerData: Auth = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(registerForm: NgForm): void {
    this.authService.registerUser(registerForm.value).subscribe((response) => {
      this.router.navigate(['users'])
    });
  }
}
