import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductoInterface} from "../interfaces/producto.interface";
import {DetalleProductoInterface} from "../interfaces/detalle-producto.interface";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: ProductoInterface[];

  constructor(private _http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this._http.get('https://angulartemplate-c0ba8.firebaseio.com/productos_idx.json').subscribe(
      (value: ProductoInterface[]) => {
        //console.log(value);
        this.productos = value;
        this.cargando = false;
        //timeout de prueba de 2s
        // setTimeout(() => {
        //   this.productos = value;
        //   this.cargando = false;
        // }, 2000);
      }
    );
  }

  public getDetalleProducto(id: string): Observable<DetalleProductoInterface> {
    return this._http.get<DetalleProductoInterface>(`https://angulartemplate-c0ba8.firebaseio.com/productos/${id}.json`);
  }
}
