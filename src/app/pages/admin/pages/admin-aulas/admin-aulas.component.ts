import { Component, OnInit } from '@angular/core';
import { AdminAulasService } from '../../services/admin-aulas/admin-aulas.service';
import { AdminAulas } from '../../classes/admin-aulas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-aulas',
  templateUrl: './admin-aulas.component.html',
  styleUrls: ['./admin-aulas.component.sass'],
})
export class AdminAulasComponent implements OnInit {
  constructor(
    private _aulaService: AdminAulasService,
    private router: Router
  ) {}

  public aulas: AdminAulas[] = [];

  ngOnInit(): void {
    this.getAulas();
  }
  reload() {
    this.router.navigate(['/admin/aulas']).then(() => {
      window.location.reload();
    });
  }
  getAula(aula_id: string) {
    this.router.navigate(['/admin/aulas'], { queryParams: { id: aula_id } });
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
