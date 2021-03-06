import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable()
export class UsuarioService {
  endpointUsuarios = "usuarios";

  headers = new Headers();

  constructor(private _http: Http) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("authorization", "teste");
  }

  alterar(usuario: any, urlUsuarios): Observable<any[]> {
    const url = urlUsuarios + this.endpointUsuarios;

    return this._http.put(url, usuario, { headers: this.headers }).map(res => res.json());
  }

  listarUsuarios(urlUsuarios): Observable<any> {
    const url = urlUsuarios + this.endpointUsuarios + "?plataforma=darwin";

    return this._http.get(url, { headers: this.headers }).map(res => res.json());
  }

  permissionar(permissioes, login, sistema, urlUsuarios): Observable<any[]> {
    let url = urlUsuarios + this.endpointUsuarios;
    url += "/" + login;
    url += "%23" + sistema;
    url += "/sistemas";
    url += "/darwin";
    url += "/permissoes";

    return this._http.post(url, permissioes, { headers: this.headers }).map(res => res.json());
  }

  buscaPermissoes(login, sistema, urlUsuarios): Observable<any[]> {
    let url = urlUsuarios + this.endpointUsuarios;
    url += "/" + login;
    url += "%23" + sistema;
    url += "/sistemas";
    url += "/darwin";
    url += "/permissoes";

    return this._http.get(url, { headers: this.headers }).map(res => res.json());
  }

  buscarEstadoPermissionamento(urlUsuarios, sistema, estadoPermissionamento): Observable<any[]> {
    let url = urlUsuarios + this.endpointUsuarios;
    url += "/plataformas/darwin/sistemas";
    url += "/" + sistema;
    url += "/permissoes";
    url += "?filtro=";
    url += estadoPermissionamento;

    return this._http.get(url, { headers: this.headers }).map(res => res.json());
  }
}
