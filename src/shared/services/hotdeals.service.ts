import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap, take } from 'rxjs/operators';
import { OrderByDirection } from '@firebase/firestore-types';
import { Hotdeal } from '../models/hotdeal.model';

@Injectable({
  providedIn: 'root'
})
export class HotdealsService {
  serviceUrl = 'hotdeals';
  constructor(private afs: AngularFirestore) {}

  create(pack: Hotdeal) {
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
            const data = a.payload.doc.data() as Hotdeal;
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
          const value = { ...ref, id: sid } as Hotdeal;
          return value;
        })
      );
  }

  getPaginatedStartAfter(order: OrderByDirection = 'asc', limit, startAfter) {
    // console.log(companyId, order, limit, startAfter);
    return this.afs
      .collection(this.serviceUrl, ref =>
        ref
          .orderBy('createdAt', order)
          .limit(limit)
          .startAfter(startAfter)
      )
      .snapshotChanges()
      .pipe(
        // take(1),
        map(actions => {
          if (order === 'asc') {
            actions.reverse();
          }
          // console.log(actions);
          return actions.map(a => {
            const data = a.payload.doc.data() as Hotdeal;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  update(sid, session: Hotdeal) {
    delete session['id'];
    return this.afs.doc(this.serviceUrl + '/' + sid).update({
      ...session,
      updatedAt: new Date()
    });
  }

  delete(sid) {
    return this.afs.doc(this.serviceUrl + '/' + sid).delete();
  }
}
