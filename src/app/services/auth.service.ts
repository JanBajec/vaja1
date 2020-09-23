import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_KEY = 'token';

  constructor(private storage: Storage, private router: Router) { }

  login(){
    this.storage.set(this.AUTH_KEY, true);
    this.router.navigate(['/tabs/tab3']);
  }

  signup(){
    this.storage.set(this.AUTH_KEY, true);
    this.router.navigate(['/tabs/tab3']);
  }
}
