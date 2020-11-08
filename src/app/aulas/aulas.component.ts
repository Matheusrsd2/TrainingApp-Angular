import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  constructor() { }

  descricao = new FormControl('', [Validators.required]);
  duracao = new FormControl('', [Validators.required]);
  dataCadastro = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    
  }

  getErrorMessage() {
    if (this.duracao.hasError('required')) {
      return 'A Duração deve ser preenchida';
    }
    if (this.dataCadastro.hasError('required')) {
      return 'A Data deve ser preenchida';
    }
  }

  form: FormGroup = new FormGroup({
    descricao: new FormControl('', Validators.required),
    duracao: new FormControl(''),
    dataCadastro: new FormControl('')
  });

}
