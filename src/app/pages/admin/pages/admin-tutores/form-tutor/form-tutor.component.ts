import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminTutorsService } from '../../../services/admin-tutors/admin-tutors.service';
import { AdminTutors } from '../../../classes/admin-tutors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-tutor',
  templateUrl: './form-tutor.component.html',
  styleUrls: ['./form-tutor.component.sass'],
})
export class FormTutorComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _tutorService: AdminTutorsService
  ) {}

  tutorEdit: AdminTutors = {} as AdminTutors;
  tutorForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
    this.loadTutorData();
  }
  initForm(): void {
    this.tutorForm = this.fb.group({
      avatar: [this.tutorEdit.avatar],
      nome: [this.tutorEdit.nome],
      funcao: [this.tutorEdit.funcao],
      contact: [this.tutorEdit.contact],
      insta: [this.tutorEdit.insta],
      descricao: [this.tutorEdit.descricao],
    });
  }
  loadTutorData() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this._tutorService.getTutor(params['id']).subscribe((result) => {
          this.tutorEdit = result;
          this.tutorForm.patchValue(this.tutorEdit);
        });
      }
    });
  }
  clearTutorEdit() {
    this.tutorEdit = {} as AdminTutors;
    this.tutorForm.patchValue(this.tutorEdit);
  }
  deleteTutor(tutor_id: string) {
    this._tutorService.deleteTutor(tutor_id).subscribe((result) => {
      console.log(result);
    });
    this.clearTutorEdit();
  }
  SaveData() {
    if (this.tutorEdit.id) {
      this._tutorService
        .editTutor(this.tutorEdit.id, this.tutorForm.value)
        .subscribe((result) => {
          console.log(result);
        });
    } else {
      this._tutorService.saveTutor(this.tutorForm.value).subscribe((result) => {
        console.log(result);
      });
    }
    this.clearTutorEdit();
  }
}
