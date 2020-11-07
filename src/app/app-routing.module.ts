import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursobyidComponent } from './cursos/cursobyid/cursobyid.component'
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import {SobreComponent} from './template/sobre/sobre.component';


const routes: Routes = [{
    path:'', component: HomeComponent
  },
  {
  path:'cursos', component: CursosComponent
  },
  {
    path:'cursos/:id', component: CursobyidComponent
  },
  {
    path:'sobre', component: SobreComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
