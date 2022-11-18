import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User | undefined;
  isEdit: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get("id");
      if (id) {
        this.isEdit = true;
        this.user = this.userService.getUserById(Number(id));
      } else {
        this.isEdit = false;
        this.user = {
          id: 0,
          name: "",
          email: "",
          city: "",
        }
      }
    })
  }

  onSubmit(userForm: NgForm): void {
    if (this.isEdit) {
      this.userService.updateUser(userForm.value)
    } else {
      let newUser = {
        id: this.userService.getUsers().length,
        ...userForm.value
      };
      this.userService.addUser(newUser);
    }

    this.router.navigate(['users']);
  }

}
