import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

    url = 'http://queroplay.mybluemix.net/aluno/95630422d42d5b2d8621d9bc2c2ab194';

  constructor( private http: HttpClient ) { }

  getAluno() {
    return this.http.get(this.url);
  }
}
