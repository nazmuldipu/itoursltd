import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/shared/models/user.model';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  user: User;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user$ = afAuth.authState;
  }

  getUser$() {
    return this.user$;
  }

  register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginWithEmail(email, password) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  saveUserInfoFromForm(id, name, email, password) {
    return this.afs
      .collection('users')
      .doc(id)
      .set({
        id: id,
        name: name,
        email: email,
        password: password,
        roles: ['USER']
      });
  }

  getRegisteredUsers(uid: string) {
    return this.afs
      .doc('users/' + uid)
      .valueChanges()
      .pipe(
        take(1),
        map(ref => {
          const value = { ...ref, id: uid } as User;
          return value;
        })
      );
  }

  logout() {
    this.afAuth.auth
      .signOut()
      .then(data => {
        this.afs.firestore.disableNetwork();
        localStorage.clear();
        console.log('SIGNOUT');
        this.router.navigate(['/login']);
        location.reload();
      })
      .catch(error => {
        console.log('SIGNOUT ERROR', error);
      });
  }
}
