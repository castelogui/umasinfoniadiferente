import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminUsersService } from '../../../services/admin-users/admin-users.service';
import { AdminUsers } from '../../../classes/admin-users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.sass'],
})
export class FormUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _userService: AdminUsersService
  ) {}

  userEdit: AdminUsers = {} as AdminUsers;
  userForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
    this.loadUserData();
  }
  initForm(): void {
    this.userForm = this.fb.group({
      nome: [this.userEdit.nome],
      funcao: [this.userEdit.funcao],
      email: [this.userEdit.email],
      contact: [this.userEdit.contact],
      descricao: [this.userEdit.descricao],
      permissao: [this.userEdit.permissao],
      password: [this.userEdit.password],
      status: [this.userEdit.status],
      insta: [this.userEdit.insta],
    });
  }
  loadUserData(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this._userService.getUser(params['id']).subscribe((result) => {
          this.userEdit = result;
          //this.userForm.patchValue(this.userEdit);
        });
      }
    });
  }
  clearUserEdit() {
    this.userEdit = {} as AdminUsers;
    this.userForm.patchValue(this.userEdit);
  }
  deleteUser(user_id: string) {
    this._userService.deleteUser(user_id).subscribe((result) => {
      console.log(result);
    });
    this.clearUserEdit();
  }
  SaveData() {
    if (this.userEdit.id) {
      this._userService
        .editUser(this.userEdit.id, this.userForm.value)
        .subscribe((result) => {
          console.log(result);
        });
    } else {
      this._userService.saveUser(this.userForm.value).subscribe((result) => {
        console.log(result);
      });
    }
    this.clearUserEdit();
  }
}
