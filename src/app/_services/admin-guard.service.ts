import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {
  user : any ;
  role
  constructor (private authService: AuthService,private _location: Location,
    private router : Router,private tokenStorage: TokenStorageService, private route: ActivatedRoute,) {} 
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot,):  boolean  {

if ( this.tokenStorage.getUser().roles=="ROLE_ADMIN")

return true;
else
{
 
  this._location.back();
  return false;
}
}

}
