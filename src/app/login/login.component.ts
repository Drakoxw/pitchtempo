import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginSService } from './login-s.service';
import { NoSeoService } from '../no-seo.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  correo!:string
  pass!:string


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private loginSer: LoginSService,
    private noseo:NoSeoService
    ) { }

  ngOnInit(): void {
    this.noseo.generarNoSeo();
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.ngZone.run(() => {
          this.router.navigate(['/admin']);
        })
      }
    })
  }

  login(){
    this.afAuth.signInWithEmailAndPassword(this.correo, this.pass)
      .then(resp => {
        this.loginSer.userlog = resp
        this.router.navigate(['/admin']);
      })
  }

  logout(){
    this.afAuth.signOut().then(res => {
      this.router.navigate(['/']);
    })
  }

}
