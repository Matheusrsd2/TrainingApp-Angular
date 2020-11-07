import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursobyid',
  templateUrl: './cursobyid.component.html',
  styleUrls: ['./cursobyid.component.css']
})
export class CursobyidComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cursoService: CursoService) {
  }

  cursobyId: any;
  aula: any;
  formCurso: FormGroup;
  registerForm: FormGroup;

  p: number = 1;

  ngOnInit(): void {
    this.getCursobyId();
  }

  public getCursobyId () {
    const idCurso = +this.route.snapshot.paramMap.get('id');
    this.cursoService.getCursoById(idCurso).subscribe(response => {
      this.cursobyId = response;
      console.log(this.cursobyId);

    }, error=> {
      console.log(error)
    })
  }

  /*salvarAlteracao(template:any){
    this.aula = Object.assign({}, this.registerForm.value);
    //console.log(this.evento);
    this.cursoService.postAula(this.aula).subscribe(
      (novaAula: Curso) => {
        console.log(novoEvento);
        template.hide();
        this.getCurso();
      }, error => {
        console.log(error);
      }
    )
  }*/
}
