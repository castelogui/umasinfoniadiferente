import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminUsersService } from '../../../services/admin-users/admin-users.service';
import { AdminUsers } from '../../../classes/admin-users';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.sass']
})
export class FormUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _userService: AdminUsersService
  ) {}

  @Input() userEdit: AdminUsers = {} as AdminUsers;
  userForm: FormGroup = new FormGroup({});
  public user: AdminUsers = {} as AdminUsers;

  ngOnInit(): void {
    this.initForm();
    this.loadUserData();
  }
  initForm(): void {
    this.userForm = this.fb.group({
      nome: [''],
      funcao: [''],
      email: [''],
      contact: [''],
      descricao: [''],
      permissao: [''],
      password: [''],
      status: [false],
      insta: [''],
    });
  }
  loadUserData(): void {
    this.userForm.patchValue(this.userEdit);
  }
  clearUserEdit() {
    this.userEdit = {} as AdminUsers;
  }
  SaveData() {
    if (this.userEdit.id) {
      this._userService
        .editUser(this.userEdit.id, this.userForm.value)
        .subscribe((result) => {
          this.clearUserEdit();
          window.location.reload();
        });
    } else {
      this._userService.saveUser(this.userForm.value).subscribe((result) => {
        window.location.reload();
      });
    }
  }
}
