import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
