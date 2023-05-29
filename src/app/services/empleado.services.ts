
import { Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth"; 
import { Firestore, collection, collectionData, updateDoc,deleteDoc,doc,addDoc} from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import Empleado from "../interfaces/empleado.interfaces";


@Injectable({
    providedIn: 'root'
})

export class EmpleadoService {
    constructor(private auth:Auth,private firestore :Firestore){}

    async registerProduct({name,email,role,password}: any){
        const coleccion= collection(this.firestore,'Empleados');
        addDoc(coleccion,{name,email,role,password});

      }

      getCollection():Observable<Empleado[]> {
        const coleccion= collection(this.firestore,'Empleados');
       return collectionData(coleccion,{idField:'id'}) as Observable<Empleado[]>;
      }
    deleteProduct(p:Empleado){
      console.log(p.id);
      const docProduct= doc(this.firestore,`Empleados/${p.id}`);
      return deleteDoc(docProduct);
    }

    editProduct(p:Empleado){
      console.log(p);
      const docProduct= doc(this.firestore,`Empleados/${p.id}`);
      return deleteDoc(docProduct);
    }
}

       
          
 
