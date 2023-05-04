import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Vehiculo from '../interfaces/vehiculo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private firestore: Firestore) { }

  addVehiculo(vehiculo: Vehiculo) {
    const placeVehiculo = collection(this.firestore, 'vehiculo');
    return addDoc(placeVehiculo, vehiculo);
  }

  getVehiculo(): Observable<Vehiculo[]> {
    const placeVehiculo = collection(this.firestore, 'vehiculo');
    return collectionData(placeVehiculo, { idField: 'id' }) as Observable<Vehiculo[]>;
  }

  deleteVehiculo(vehiculo: Vehiculo) {
    const placeDocRef = doc(this.firestore, `vehiculo/${vehiculo.id}`);
    return deleteDoc(placeDocRef);
  }
}
