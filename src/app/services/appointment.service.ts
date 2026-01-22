import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  collectionData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private firestore = inject(Firestore);

  // ✅ Add new appointment
  async bookAppointment(appointment: any) {
    const colRef = collection(this.firestore, 'appointments');
    return await addDoc(colRef, {
      ...appointment,
      createdAt: new Date()
    });
  }

  // ✅ Check if a time slot is already booked
  async isSlotBooked(date: string, time: string): Promise<boolean> {
    const colRef = collection(this.firestore, 'appointments');
    const q = query(colRef, where('date', '==', date), where('time', '==', time));
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  }

  // ✅ Get all appointments
  getAppointments(): Observable<any[]> {
    const colRef = collection(this.firestore, 'appointments');
    return collectionData(colRef, { idField: 'id' }) as Observable<any[]>;
  }
}
