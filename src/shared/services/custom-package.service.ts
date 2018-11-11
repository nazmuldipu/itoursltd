import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { OrderByDirection } from '@firebase/firestore-types';
import { map, take } from 'rxjs/operators';

import { CustomPackage } from '../models/custom-package.model';

@Injectable({
  providedIn: 'root'
})
export class CustomPackageService {
  serviceUrl = 'customPackage';
  constructor(private afs: AngularFirestore) {}

  create(pack: CustomPackage) {
    const value = {
      ...pack,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return this.afs.collection(this.serviceUrl).add({
      ...value
    });
  }

  getAll() {
    return this.afs
      .collection(this.serviceUrl, ref => ref.orderBy('createdAt'))
      .snapshotChanges()
      .pipe(
        take(1),
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as CustomPackage;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  get(sid: string) {
    return this.afs
      .doc(this.serviceUrl + '/' + sid)
      .valueChanges()
      .pipe(
        take(1),
        map(ref => {
          const value = { ...ref, id: sid } as CustomPackage;
          return value;
        })
      );
  }

  getPaginatedStartAfter(order: OrderByDirection = 'asc', limit, startAfter) {
    return this.afs
      .collection(this.serviceUrl, ref =>
        ref
          .orderBy('createdAt', order)
          .limit(limit)
          .startAfter(startAfter)
      )
      .snapshotChanges()
      .pipe(
        map(actions => {
          if (order === 'asc') {
            actions.reverse();
          }
          return actions.map(a => {
            const data = a.payload.doc.data() as CustomPackage;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  update(sid, cust: CustomPackage) {
    delete cust['id'];
    return this.afs.doc(this.serviceUrl + '/' + sid).update({
      ...cust,
      updatedAt: new Date()
    });
  }

  delete(sid) {
    return this.afs.doc(this.serviceUrl + '/' + sid).delete();
  }
}
