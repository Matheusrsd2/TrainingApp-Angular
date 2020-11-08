import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateFormatPipePipe } from './helps/date-format-pipe.pipe';
import { CursoService } from './services/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx-bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//Template Components
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './template/header/header.component';
//Componentes
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './template/sobre/sobre.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CursobyidComponent } from './cursos/cursobyid/cursobyid.component';
import { CursosComponent } from './cursos/cursos.component';
//Material Design
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//Search / Pagination
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AulasComponent } from './aulas/aulas.component';

//ngx-toastr
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DateFormatPipePipe,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    SobreComponent,
    CategoriasComponent,
    CursobyidComponent,
    AulasComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatGridListModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
