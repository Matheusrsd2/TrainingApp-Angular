import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../models/Curso';
import { CursoService } from '../services/curso.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any;
  curso: Curso;
  nomeCurso: any;
  formCurso: FormGroup;
  registerForm: FormGroup;
  file: File;


  constructor(private cursoService: CursoService, private modalService: BsModalService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.validation();
    this.getCurso();
  }

  public getCurso () {
    this.cursos = this.cursoService.getCurso().subscribe(response => {
      this.cursos = response;
    }, error=> {
      console.log(error)
    })
  }

  openModal(template: any){
    template.show();
  }

  salvarAlteracao(template:any){
    this.curso = Object.assign({}, this.registerForm.value);
    //console.log(this.evento);

    this.cursoService.postUpload(this.file).subscribe();

    const nomeArquivo = this.curso.imagem.split('\\', 3);
    this.curso.imagem = nomeArquivo[2];

    this.cursoService.postCurso(this.curso).subscribe(
      (novoEvento: Curso) => {
        console.log(novoEvento);
        template.hide();
        this.getCurso();
        this.toastr.success('Curso criado com Sucesso!', '', {timeOut: 7000});
      }, error => {
        this.toastr.error('Houve um erro ao salvar, tente novamente', '', {timeOut: 7000});
        console.log(error);
      }
    )
  }

  onFileChange(event){
    const reader = new FileReader();
    if (event.target.files && event.target.files.length){
      this.file = event.target.files;
    }
    console.log(this.file);

  }

  validation(){
    this.registerForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
     
      dataCadastro: new FormControl('', Validators.required),
      categoriaId: new FormControl('', Validators.required),
      imagem: new FormControl,
      tempoDuracao: new FormControl('', Validators.required)
    });
  }

  search(){
    if (this.nomeCurso == ""){
      this.ngOnInit();
    }
    else {
      this.cursos = this.cursos.filter(res => {
        return res.nome.toLocaleLowerCase().match(this.nomeCurso.toLocaleLowerCase());
      });
    }
  }

}
