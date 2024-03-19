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

  ngOnInit(): void {
    this._userService.getUsers().subscribe((retorno) => {
      this.users = retorno.map((item) => {
        return new AdminUsers(
          item.id,
          item.avatar,
          item.nome,
          item.funcao,
          item.password,
          item.email,
          item.contact,
          item.permissoes,
          item.insta,
          item.descricao
        );
      });
    });
  }
}
