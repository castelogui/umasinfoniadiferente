import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminAulasService } from '../../../services/admin-aulas/admin-aulas.service';
import { AdminAulas } from '../../../classes/admin-aulas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-aula',
  templateUrl: './form-aula.component.html',
  styleUrls: ['./form-aula.component.sass'],
})
export class FormAulaComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _aulaService: AdminAulasService
  ) {}

  aulaEdit: AdminAulas = {} as AdminAulas;
  aulaForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
    this.loadAulaData();
  }
  initForm(): void {
    this.aulaForm = this.fb.group({
      instrumento: [this.aulaEdit.instrumento],
      img: [this.aulaEdit.img],
      detalhes: [this.aulaEdit.detalhes],
      niveis: this.fb.array([false, false, false]),
      valor: [this.aulaEdit.valor],
    });
  }
  loadAulaData() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this._aulaService.getAula(params['id']).subscribe((result) => {
          this.aulaEdit = result;
          this.aulaForm.patchValue(this.aulaEdit);
          console.log(this.aulaForm.value);
        });
      }
    });
  }
  clearAulaEdit() {
    this.aulaEdit = {} as AdminAulas;
    this.aulaForm.patchValue(this.aulaEdit);
  }
  deleteAula(aula_id: string) {
    this._aulaService.deleteAula(aula_id).subscribe((result) => {
      console.log(result);
    });
    this.clearAulaEdit();
  }
  SaveData() {
    if (this.aulaEdit.id) {
      this._aulaService
        .editAula(this.aulaEdit.id, this.aulaForm.value)
        .subscribe((result) => {
          console.log(result);
        });
    } else {
      this._aulaService.saveAula(this.aulaForm.value).subscribe((result) => {
        console.log(result);
      });
    }
    this.clearAulaEdit();
  }
}
