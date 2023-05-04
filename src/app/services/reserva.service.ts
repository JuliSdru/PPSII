import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Reserva from '../interfaces/reserva.interface';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private firestore: Firestore) { }

  addReserva(reserva: Reserva) {
    const placeReserva = collection(this.firestore, 'reserva');
    return addDoc(placeReserva, reserva);
  }

  getReserva(): Observable<Reserva[]> {
    const placeReserva = collection(this.firestore, 'reserva');
    return collectionData(placeReserva, { idField: 'id' }) as Observable<Reserva[]>;
  }

  deleteReserva(reserva: Reserva) {
    const placeDocRef = doc(this.firestore, `reserva/${reserva.id}`);
    return deleteDoc(placeDocRef);
  }
}
