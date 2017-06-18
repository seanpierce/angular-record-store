import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdminComponent } from '../admin/admin.component';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AngularFireAuth]
})
export class AuthComponent {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(function(firebaseUser) {
    // success!
    // console.log(firebaseUser);
    document.getElementById('login-warning').style.display = 'none';
    })
    .catch(function(error) {
      // failure :(
      document.getElementById('login-warning').style.display = 'block';
      console.log('dang');
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
