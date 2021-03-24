import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSService {

  userlog:any;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone

  ) { }

  logout(){
    this.afAuth.signOut().then(res => {
      this.userlog = null
      this.router.navigate(['/']);
    })
  }
  check(){
    this.afAuth.user.subscribe(user => {
      if (!user) {
        //this.userlog = user

        this.ngZone.run(() => {
          this.router.navigate(['/']);
        })
      }
    })
  }
}
