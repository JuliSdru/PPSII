
import { Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth"; 
import { Firestore, collection, collectionData, updateDoc,deleteDoc,doc,addDoc} from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import { IProducto } from 'src/app/interfaces/iproducto.interfaces';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(private auth:Auth,private firestore :Firestore){}

    async registerProduct({name,precio,stock,minStock,category}: any){

        const coleccion= collection(this.firestore,'Productos');
        addDoc(coleccion,{name,precio,stock,minStock,category});

      }

      getCollection():Observable<IProducto[]> {
        const coleccion= collection(this.firestore,'Productos');
       return collectionData(coleccion,{idField:'id'}) as Observable<IProducto[]>;
      }
    deleteProduct(p:IProducto){
      console.log(p);
      const docProduct= doc(this.firestore,`Productos/${p.id}`);
      return deleteDoc(docProduct);
    }

    editProduct(p:IProducto){
      console.log(p);
      const docProduct= doc(this.firestore,`Productos/${p.id}`);
      return deleteDoc(docProduct);
    }
}

       
          
 
