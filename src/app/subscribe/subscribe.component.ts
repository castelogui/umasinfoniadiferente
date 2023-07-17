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
  instrumentoImgSelecionado: string = '';
  constructor() { }

  ngOnInit() {
    this.createForm(new Aluno());
    this.formAluno.valueChanges.subscribe(data => this.onInsert());
    this.getInstrumento();
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
    this.buildMessage();
    //this.formAluno.reset(new Aluno());
  }

  onInsert() {
    this.instrumentoImgSelecionado = this.instrumentos.find(x => x.id == this.formAluno.get('instrumento')?.value)?.avatar || '';
    this.alterClass(this.formAluno.get('nome')?.value, 'label-nome');
    this.alterClass(this.formAluno.get('telefone')?.value, 'label-telefone');
    this.alterClass(this.formAluno.get('instrumento')?.value, 'label-instrumento');
    this.alterClass(this.formAluno.get('dataNascimento')?.value, 'label-dataNasc');
    this.alterClass(this.formAluno.get('esquemaAulas')?.get('turno')?.value, 'label-turno');
    this.alterClass(this.formAluno.get('esquemaAulas')?.get('dias')?.value, 'label-dias');
  }
  alterClass(atributo: FormData, id: string) {
    if (atributo) {
      document.getElementById(id)?.classList.add('has-value');
    } else {
      document.getElementById(id)?.classList.remove('has-value');
    }
  }
  getInstrumento() {
    let instrumento = localStorage.getItem('instrumento');
    if (instrumento) {
      this.formAluno.get('instrumento')?.setValue(JSON.parse(instrumento).id);
      this.instrumentoImgSelecionado = JSON.parse(instrumento).avatar;
      localStorage.removeItem('instrumento');
    }
  }
  // constroi mensagem para ser enviada no whatsapp
  buildMessage() {
    const data = this.formAluno.value;
    let message = `Olá, meu nome é *${data.nome}*, *${this.calculateAge(data.dataNascimento)}* anos e tenho interesse em fazer aulas de *${this.instrumentos.find(x => x.id == data.instrumento)?.name}*.\n`;
    message += `Prefiro aulas no período da *${this.turnos.find(x => x.id == data.esquemaAulas.turno)?.name}*.\n`;
    message += `Tenho disponibilidade *${this.dias.find(x => x.id == data.esquemaAulas.dias)?.name}*.\n`;
    message += `Contato: *${data.telefone}*.\n`;
    message += `Data de Nascimento: *${this.formatDate(data.dataNascimento)}*.\n`;
    message += `Obrigado!`;

    window.open(`https://api.whatsapp.com/send?phone=5569999071519&text=${message}`, '_blank');
  }
  formatDate(date: Date) {
    let data = new Date(date);
    let dia = data.getDate() + 1;
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    return `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;    
  }
  calculateAge(date: Date) {
    let ageDifMs = Date.now() - new Date(date).getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
export class Aluno {
  nome: string = '';
  telefone: string = '';
  genero: number = 0;
  dataNascimento: Date | null = null;
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
