import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from '../../services/admin-users/admin-users.service';
import { AdminUsers } from '../../classes/admin-users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.sass'],
})
export class AdminUsersComponent implements OnInit {
  constructor(
    private _userService: AdminUsersService,
    private router: Router
  ) {}
  public users: AdminUsers[] = [];

  ngOnInit(): void {
    this.getUsers();
  }
  reload() {
    this.router.navigate(['/admin/users']).then(() => {
      window.location.reload();
    });
  }
  getUser(user_id: string) {
    this.router.navigate(['/admin/users'], { queryParams: { id: user_id } });
  }
  getUsers() {
    this._userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
