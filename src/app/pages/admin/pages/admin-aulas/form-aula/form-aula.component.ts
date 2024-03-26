import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminAulasService } from '../../../services/admin-aulas/admin-aulas.service';
import { AdminAulas } from '../../../classes/admin-aulas';

@Component({
  selector: 'app-form-aula',
  templateUrl: './form-aula.component.html',
  styleUrls: ['./form-aula.component.sass'],
})
export class FormAulaComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _aulaService: AdminAulasService
  ) {}

  @Input() aulaEdit: AdminAulas = {} as AdminAulas;
  aulaForm: FormGroup = new FormGroup({});
  nivelForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
    this.loadAulaData();
  }
  initForm(): void {
    this.aulaForm = this.fb.group({
      instrumento: new FormControl(''),
      img: [''],
      detalhes: [''],
      niveis: this.fb.array([false, false, false]),
      valor: 0,
    });
  }
  loadAulaData() {
    this.aulaForm.patchValue(this.aulaEdit);
  }
  clearAulaEdit() {
    this.aulaEdit = {} as AdminAulas;
  }
  deleteAula(aula_id: string) {
    this._aulaService.deleteAula(aula_id).subscribe((result) => {
      console.log(result);
    });
  }
  SaveData() {
    if (this.aulaEdit.id) {
      this._aulaService
        .editAula(this.aulaEdit.id, this.aulaForm.value)
        .subscribe((result) => {
          this.clearAulaEdit();
          window.location.reload();
        });
    } else {
      this._aulaService.saveAula(this.aulaForm.value).subscribe((result) => {
        window.location.reload();
      });
    }
  }
}
