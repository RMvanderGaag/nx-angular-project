import { Component, OnInit } from '@angular/core';
import { User, UserService } from '@concert-project/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(u => this.users = u);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id.toString()).subscribe(response => {
      this.getAllUsers();
    });
  }

}
