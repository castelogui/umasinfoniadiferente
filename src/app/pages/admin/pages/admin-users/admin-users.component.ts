import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from '../../services/admin-users/admin-users.service';
import { AdminUsers } from '../../classes/admin-users';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.sass'],
})
export class AdminUsersComponent implements OnInit {
  constructor(private _userService: AdminUsersService) {}
  public users: AdminUsers[] = [];
  public userEdit: AdminUsers = {} as AdminUsers;

  ngOnInit(): void {
    this.getUsers();
  }
  deleteUser(user_id: string) {
    this._userService.deleteUser(user_id).subscribe((result) => {
      console.log(result);
    });
  }
  getUser(user_id: string) {
    this._userService.getUser(user_id).subscribe((user) => {
      this.userEdit = user;
    });
  }
  getUsers() {
    this._userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
