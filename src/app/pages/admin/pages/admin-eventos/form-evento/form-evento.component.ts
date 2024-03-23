import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminEventosService } from '../../../services/admin-eventos/admin-eventos.service';
import { AdminEventos } from '../../../classes/admin-eventos';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.sass'],
})
export class FormEventoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _eventService: AdminEventosService
  ) {}

  @Input() eventEdit: AdminEventos = {} as AdminEventos;
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
    this.eventForm.patchValue(this.eventEdit);
  }
  clearEventEdit() {
    this.eventEdit = {} as AdminEventos;
  }
  deleteEvent(event_id: string) {
    this._eventService.deleteEvent(event_id).subscribe((result) => {
      console.log(result);
    });
  }
  SaveData() {
    this.eventForm.controls['updatedAt'].setValue(new Date());
    if (this.eventEdit.id) {
      console.log(this.eventForm.value);
      this._eventService
        .editEvent(this.eventEdit.id, this.eventForm.value)
        .subscribe((result) => {
          this.clearEventEdit();
          window.location.reload();
        });
    } else {
      console.log(this.eventForm.value);
      this._eventService.saveEvent(this.eventForm.value).subscribe((result) => {
        window.location.reload();
      });
    }
  }
}
