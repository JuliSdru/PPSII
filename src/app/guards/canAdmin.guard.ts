//import { AuthService } from '@auth/services/auth.service';
import { UserService } from '../services/user.services'
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import Users from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CanAdminGuard implements CanActivate {
  constructor(private authSvc: UserService) {}

  canActivate(): Observable<boolean> {
    return this.authSvc._userP.pipe(
        take(1),
        map((user:Users) =>  this.authSvc.isAdmin(user)),
        tap((canEdit) => {
          if (!canEdit) {
            window.alert('Access denied. Must have permission to manage data.');
          }
        })
      );
      
  }
}
