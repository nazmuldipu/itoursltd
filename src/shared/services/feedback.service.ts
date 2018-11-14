import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap, take } from 'rxjs/operators';
import { OrderByDirection } from '@firebase/firestore-types';
import { Feedback } from 'src/shared/models/feedback.model';
// import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  serviceUrl = 'feedbacks';
  constructor(private afs: AngularFirestore) {}

  create(pack: Feedback) {
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
            const data = a.payload.doc.data() as Feedback;
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
          const value = { ...ref, id: sid } as Feedback;
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
            const data = a.payload.doc.data() as Feedback;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  update(sid, session: Feedback) {
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
