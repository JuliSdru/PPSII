import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import PagoReserva from '../interfaces/pagoReserva.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PagoReservaService {

  constructor(private firestore: Firestore) { }

  addPagoReserva(pagoReserva: PagoReserva) {
    const placePagoReserva = collection(this.firestore, 'pagoReserva');
    return addDoc(placePagoReserva, pagoReserva);
  }

  getPagoReserva(): Observable<PagoReserva[]> {
    const placePagoReserva = collection(this.firestore, 'pagoReserva');
    return collectionData(placePagoReserva, { idField: 'id' }) as Observable<PagoReserva[]>;
  }

  deletePagoReserva(pagoReserva: PagoReserva) {
    const placeDocRef = doc(this.firestore, `pagoReserva/${pagoReserva.id}`);
    return deleteDoc(placeDocRef);
  }
}
