import { Component, OnInit } from '@angular/core';
import { Tutores } from 'src/app/classes/tutores';
import { TutoresService } from 'src/app/services/tutores/tutores.service';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.sass'],
})
export class TutoresComponent implements OnInit {
  constructor(private _tutoresService: TutoresService) {}
  public tutores: Tutores[] = [];

  ngOnInit() {
    this._tutoresService.getTutores().subscribe((retorno) => {
      this.tutores = retorno.map((item) => {
        return new Tutores(
          item.id,
          item.avatar,
          item.nome,
          item.funcao,
          item.contact,
          item.insta,
          item.descricao,
        );
      });
    });
  }
}
