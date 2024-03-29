import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminEventosService } from '../../../services/admin-eventos/admin-eventos.service';
import { AdminEventos } from '../../../classes/admin-eventos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.sass'],
})
export class FormEventoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _eventService: AdminEventosService
  ) {}

  eventEdit: AdminEventos = {} as AdminEventos;
  eventForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
    this.loadEventData();
  }
  initForm(): void {
    this.eventForm = this.fb.group({
      date: [''],
      updatedAt: [''],
      name: [''],
      descricao: [''],
      img: [''],
    });
  }
  loadEventData() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this._eventService.getEvent(params['id']).subscribe((result) => {
          this.eventEdit = result;
          this.eventForm.patchValue(this.eventEdit);
        });
      }
    });
  }
  clearEventEdit() {
    this.eventEdit = {} as AdminEventos;
    this.eventForm.patchValue(this.eventEdit);
  }
  deleteEvent(event_id: string) {
    this._eventService.deleteEvent(event_id).subscribe((result) => {
      console.log(result);
    });
    this.clearEventEdit();
  }
  SaveData() {
    this.eventForm.controls['updatedAt'].setValue(new Date());
    if (this.eventEdit.id) {
      console.log(this.eventForm.value);
      this._eventService
        .editEvent(this.eventEdit.id, this.eventForm.value)
        .subscribe((result) => {
          console.log(result);
        });
    } else {
      console.log(this.eventForm.value);
      this._eventService.saveEvent(this.eventForm.value).subscribe((result) => {
        console.log(result);
      });
      this.clearEventEdit();
    }
  }
}
