import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdminComponent } from '../admin/admin.component';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  template: `
  <h3>Admin login</h3>

    <strong>
      <span *ngIf="user | async">Welcome</span>
      <span *ngIf="(user | async) == null">please log in</span>
      {{ (user | async)?.email }}
      <br>
    </strong>

    <div *ngIf="(user | async) == null">
      <input type="email" #email placeholder="Email">
      <input type="password" #password placeholder="Password">
      <button (click)="login(email.value, password.value)">Login</button>
    </div>
    <div *ngIf="user | async" >
      <button (click)="logout()">Logout</button>
    </div>

    <app-admin *ngIf="user | async"></app-admin>
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
