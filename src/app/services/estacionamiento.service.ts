import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Estacionamiento from '../interfaces/estacionamiento.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor(private firestore: Firestore) { }

  addPlace(estacionamiento: Estacionamiento) {
    const placeEstacionamiento = collection(this.firestore, 'estacionamiento');
    return addDoc(placeEstacionamiento, estacionamiento);
  }

  getPlaces(): Observable<Estacionamiento[]> {
    const placeEstacionamiento = collection(this.firestore, 'estacionamiento');
    return collectionData(placeEstacionamiento, { idField: 'id' }) as Observable<Estacionamiento[]>;
  }

  deletePlace(estacionamiento: Estacionamiento) {
    const placeDocRef = doc(this.firestore, `estacionamiento/${estacionamiento.id}`);
    return deleteDoc(placeDocRef);
  }

}
