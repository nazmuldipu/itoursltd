import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { OrderByDirection } from '@firebase/firestore-types';
import { Package } from 'src/shared/models/package.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  serviceUrl = 'packages';

  private _packagesSource = new BehaviorSubject<Package[]>([]);
  packages$ = this._packagesSource.asObservable();
  packages: Package[] = [];

  private _packageSideNavSource = new BehaviorSubject<any>([]);
  packageSideNav$ = this._packageSideNavSource.asObservable();
  packageSideNav: any = [];

  constructor(private afs: AngularFirestore) {
    this.getAllAndStore();
  }

  getAllAndStore() {
    this.afs
      .collection(this.serviceUrl, ref => ref.orderBy('createdAt'))
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Package;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      )
      .subscribe(data => {
        // update saved packages list
        this.packages = data;
        this._packagesSource.next(this.packages);

        const side = [];
        let country = [];
        let city = [];
        this.packages.forEach(pac => {
          city = [];
          pac.area.forEach(ar => {
            //create a city list
            city.push(ar);
          });
          if (country.includes(pac.country[0])) {
            // if this country already exists
            let i = side.findIndex(ob => ob.country == pac.country[0]); // find index of existing country
            city.forEach(ci => {
              if (!side[i].city.includes(ci)) {
                side[i].city.push(ci); // push current cities to existing list
              }
            });
          } else {
            // if this country doen't exists
            const value = {
              id: pac.id,
              country: pac.country[0],
              city: city,
              imageUrl: pac.imageUrl
            }; // create a object of country and cities
            side.push(value);
            country.push(pac.country[0]); // update country list
          }
        });
        this.packageSideNav = side;
        this._packageSideNavSource.next(this.packageSideNav);
      });
  }

  create(pack: Package) {
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
            const data = a.payload.doc.data() as Package;
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
          const value = { ...ref, id: sid } as Package;
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
            const data = a.payload.doc.data() as Package;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  update(sid, session: Package) {
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
