import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PackageService{

    PACKAGE_KEY = 'current-package';
    HISTORY_KEY = 'history';

    constructor(private storage: Storage, private router: Router) {}

}
