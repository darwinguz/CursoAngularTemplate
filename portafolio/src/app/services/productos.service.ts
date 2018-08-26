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
  productosFiltrados: ProductoInterface[];

  constructor(private _http: HttpClient) {
    this.productos = [];
    this.productosFiltrados = [];
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
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
          resolve();
        }
      );

    });
  }

  public getDetalleProducto(id: string): Observable<DetalleProductoInterface> {
    return this._http.get<DetalleProductoInterface>(`https://angulartemplate-c0ba8.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then(() => {
        //filtrar productos
        this.filtrarProductos(termino);
      })
    } else {
      //filtrar productos
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    termino = termino.toLocaleLowerCase();
    this.productosFiltrados = this.productos.filter(
      item => (
        item.categoria.toLocaleLowerCase().indexOf(termino) >= 0
        || item.titulo.toLocaleLowerCase().indexOf(termino) >= 0
      )
    );
  }
}
