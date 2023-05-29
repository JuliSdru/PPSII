import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interfaces';

import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  viewCart:boolean=false;
  products:Producto[]=[];

  constructor(private carritoService:CarritoService) { }

  ngOnInit(): void {
   this.getProducts();
  }

  getProducts(){
  this.carritoService.getAllProducts().subscribe((data)=>{
    this.products = data;
    console.log(this.products);
  })}

  addToCart(product:Producto){
    return this.carritoService.addProduct(product);
  }

  onToggleCart(){
    this.viewCart = !this.viewCart;
  }

}
