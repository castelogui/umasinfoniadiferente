import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { instrumento } from '../aulas/aulas.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.sass']
})
export class SubscribeComponent {
  instrumentos: instrumento[] = [
    {
      id: 1,
      name: 'Bateria',
      avatar: '../../assets/instrumentos/bateria.png',
    },
    {
      id: 2,
      name: 'Violão',
      avatar: '../../assets/instrumentos/violão.png',
    },
    {
      id: 3,
      name: 'Guitarra',
      avatar: '../../assets/instrumentos/guitarra.png',
    },
    {
      id: 4,
      name: 'Teclado',
      avatar: '../../assets/instrumentos/teclado.png',
    },
    {
      id: 5,
      name: 'Cajon',
      avatar: '../../assets/instrumentos/cajon.png',
    },
    {
      id: 6,
      name: 'Percussão',
      avatar: '../../assets/instrumentos/percussão.png',
    },
    {
      id: 7,
      name: 'Ukulele',
      avatar: '../../assets/instrumentos/ukulele.png',
    }
  ]
  turnos: Turno[] = [
    {
      id: 1,
      name: 'Manhã',
    },
    {
      id: 2,
      name: 'Tarde',
    },
    {
      id: 3,
      name: 'Noite',
    }
  ]
  dias: Dias[] = [
    {
      id: 1,
      name: 'Segunda e Quarta',
    },
    {
      id: 2,
      name: 'Terça e Quinta',
    },
  ]
  formAluno!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm(new Aluno());
    this.formAluno.valueChanges.subscribe(data => this.onInsert());
  }

  createForm(aluno: Aluno) {
    this.formAluno = new FormGroup({
      nome: new FormControl(aluno.nome),
      telefone: new FormControl(aluno.telefone),
      genero: new FormControl(aluno.genero),
      dataNascimento: new FormControl(aluno.dataNascimento),
      instrumento: new FormControl(aluno.instrumento),
      esquemaAulas: new FormGroup({
        turno: new FormControl(aluno.esquemaAulas.turno),
        dias: new FormControl(aluno.esquemaAulas.dias),
      })
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formAluno.value);

    // Usar o método reset para limpar os controles na tela
    //this.formAluno.reset(new Aluno());
  }

  onInsert() {
    this.alterClass(this.formAluno.value.nome, 'label-nome');
    this.alterClass(this.formAluno.value.telefone, 'label-telefone');
    this.alterClass(this.formAluno.value.instrumento, 'label-instrumento');
    this.alterClass(this.formAluno.value.dataNascimento, 'label-dataNasc');
    this.alterClass(this.formAluno.value.esquemaAulas.turno, 'label-turno');
    this.alterClass(this.formAluno.value.esquemaAulas.dias, 'label-dias');
  }
  alterClass(atributo: any, id: string) {
    if (atributo.length > 0) {
      document.getElementById(id)?.classList.add('has-value');
    } else {
      document.getElementById(id)?.classList.remove('has-value');
    }
  }
}
export class Aluno {
  nome: string = '';
  telefone: string = '';
  genero: number = 1;
  dataNascimento: Date = new Date('01-01-2000');
  instrumento: string = '';
  esquemaAulas: EsquemaAula = new EsquemaAula;
}

export class EsquemaAula {
  turno: string = '';
  dias: string = '';
}

export class Turno {
  id: number = 0;
  name: string = '';
}

export class Dias {
  id: number = 0;
  name: string = '';
}
