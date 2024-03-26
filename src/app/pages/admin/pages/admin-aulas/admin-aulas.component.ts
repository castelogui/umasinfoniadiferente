import { Component, OnInit } from '@angular/core';
import { AdminAulasService } from '../../services/admin-aulas/admin-aulas.service';
import { AdminAulas } from '../../classes/admin-aulas';

@Component({
  selector: 'app-admin-aulas',
  templateUrl: './admin-aulas.component.html',
  styleUrls: ['./admin-aulas.component.sass'],
})
export class AdminAulasComponent implements OnInit {
  constructor(private _aulaService: AdminAulasService) {}

  public aulas: AdminAulas[] = [];
  public aulaEdit: AdminAulas = {} as AdminAulas;

  ngOnInit(): void {
    this.getAulas();
  }
  getAula(aula_id: string) {
    this._aulaService.getAula(aula_id).subscribe((aula) => {
      this.aulaEdit = aula;
    });
  }
  getAulas() {
    this._aulaService.getAulas().subscribe((aulas) => {
      this.aulas = aulas;
    });
  }
  formatValue(v: Number) {
    return v.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
