import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async saveCoursePurchase(userId: string, courseId: string) {
    const docRef = doc(this.firestore, `users/${userId}/purchases/${courseId}`);
    await setDoc(docRef, {
      purchasedAt: new Date(),
      access: true
    });
  }
}
