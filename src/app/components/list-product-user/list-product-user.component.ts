import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.services';
import { IProducto } from 'src/app/interfaces/iproducto.interfaces';

@Component({
  selector: 'app-list-product-user',
  templateUrl: './list-product-user.component.html',
  styleUrls: ['./list-product-user.component.css']
})
export class ListProductUserComponent implements OnInit {
  listProduct:IProducto[];
  //objectKeys= Object.keys({IProducto:Object});

  titulosColumnas = ['nombre', 'precio', 'stock', 'stock minimo','categoria','Acciones'];
  constructor(private productServices: ProductService) { 
    this.listProduct=[{id:'',name:'',precio:'',stock:'',minStock:'',category:''}];}

  ngOnInit(): void {
    this.productServices.getCollection().subscribe(products=>{
      console.log(products);
      this.listProduct=products;
    })
  }
  modificar(id :IProducto){
    
  }
 async eliminar(p:IProducto){
   const response= await this.productServices.deleteProduct(p);
   console.log(response);
  }

}
