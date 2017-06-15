import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdminComponent } from '../admin/admin.component';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  template: `
  <div> {{ (user | async)?.email }} </div>
  <input type="email" #email placeholder="Email">
  <input type="password" #password placeholder="Password">
  <button (click)="login(email.value, password.value)">Login</button>
  <button (click)="logout()">Logout</button>

  

  `,
  providers: [AngularFireAuth]
})
export class AuthComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
