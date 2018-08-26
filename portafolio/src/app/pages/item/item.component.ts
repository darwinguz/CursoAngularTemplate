import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService} from "../../services/productos.service";
import {DetalleProductoInterface} from "../../interfaces/detalle-producto.interface";
import {ProductoInterface} from "../../interfaces/producto.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoInterface;
  detalleProducto: DetalleProductoInterface;
  idProducto: string;

  constructor(private _activatedRoute: ActivatedRoute, public _productosService: ProductosService) {
    this.detalleProducto = {};
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      value => {
        // console.log(value['id'])
        this.idProducto = value['id'];
        this._productosService.getDetalleProducto(this.idProducto).subscribe(
          value => {
            this.detalleProducto = value;
            // console.log(this.detalleProducto)
          }
        )
      }
    )
  }

}
