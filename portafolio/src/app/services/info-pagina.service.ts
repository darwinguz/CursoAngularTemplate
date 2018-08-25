import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoPaginaInterface} from "../interfaces/info-pagina.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPaginaInterface = {};
  cargada: boolean = false;

  constructor(private _http: HttpClient) {
    console.log('InfoPaginaService se inicializó...');
    //lectura de archivo JSON
    this._http.get('assets/data/data-pagina.json')
      .subscribe(
        (value: InfoPaginaInterface) => {
          console.log(value);
          this.info = value;
          this.cargada = true;
          //solucion elegante para obtener el atributo o propiedad y no hacer a value any (en el caso de no tener interface)
          //console.log(value['twitter']);
        }
      )
  }
}
