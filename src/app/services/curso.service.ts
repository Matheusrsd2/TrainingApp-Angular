import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/Curso';

@Injectable({
    providedIn: 'root'
})

export class CursoService {
    baseUrl = 'http://localhost:5000/api/curso';
    constructor(private http: HttpClient) {
        
    }
    /*getCurso() {
        return this.http.get(this.baseUrl);
    }*/

    getCurso(): Observable<Curso[]> {
        return this.http.get<Curso[]>(this.baseUrl);
    }
    getCursoById(id:number): Observable<Curso[]> {
        return this.http.get<Curso[]>(`${this.baseUrl}/${id}`);
    }

    postCurso(curso: Curso){
        return this.http.post(this.baseUrl, curso);
    }

    postUpload(file: File){
        const fileToUpload = <File>file[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name)
        return this.http.post(`${this.baseUrl}/upload`, formData)
    }
}