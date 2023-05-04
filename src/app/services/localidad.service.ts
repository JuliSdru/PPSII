import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Localidad from '../interfaces/localidad.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private firestore: Firestore) { }

  addLocalidad(localidad: Localidad) {
    const placeLocalidad = collection(this.firestore, 'localidad');
    return addDoc(placeLocalidad, localidad);
  }

  getLocalidad(): Observable<Localidad[]> {
    const placeLocalidad = collection(this.firestore, 'localidad');
    return collectionData(placeLocalidad, { idField: 'id' }) as Observable<Localidad[]>;
  }

  deleteLocalidad(localidad: Localidad) {
    const placeDocRef = doc(this.firestore, `localidad/${localidad.id}`);
    return deleteDoc(placeDocRef);
  }

}
