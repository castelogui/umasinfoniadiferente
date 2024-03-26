import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminTutorsService } from '../../../services/admin-tutors/admin-tutors.service';
import { AdminTutors } from '../../../classes/admin-tutors';

@Component({
  selector: 'app-form-tutor',
  templateUrl: './form-tutor.component.html',
  styleUrls: ['./form-tutor.component.sass'],
})
export class FormTutorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _tutorService: AdminTutorsService
  ) {}
  @Input() tutorEdit: AdminTutors = {} as AdminTutors;
  tutorForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.initForm();
    this.loadTutorData();
  }
  initForm(): void {
    this.tutorForm = this.fb.group({
      avatar: [''],
      nome: [''],
      funcao: [''],
      contact: [''],
      insta: [''],
      descricao: [''],
    });
  }
  loadTutorData() {
    this.tutorForm.patchValue(this.tutorEdit);
  }
  clearTutorEdit() {
    this.tutorEdit = {} as AdminTutors;
  }
  deleteTutor(tutor_id: string) {
    this._tutorService.deleteTutor(tutor_id).subscribe((result) => {
      console.log(result);
    });
  }
  SaveData() {
    if (this.tutorEdit.id) {
      this._tutorService
        .editTutor(this.tutorEdit.id, this.tutorForm.value)
        .subscribe((result) => {
          this.clearTutorEdit();
          window.location.reload();
        });
    } else {
      this._tutorService.saveTutor(this.tutorForm.value).subscribe((result) => {
        window.location.reload();
      });
    }
  }
}
