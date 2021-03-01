import { UserLogin } from '../model/UserLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{Usuario} from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  logado(){
    let ok: boolean = false
    if(environment.token != ''){
      ok = true
    }
    return ok
  }

}
