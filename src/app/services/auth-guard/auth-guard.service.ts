import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.getUserFromLocalStorage();
    if (user) {
      // check if route is restricted by role
      if (route.data.roles && !user.roles.some(role => route.data.roles.includes(role))) {
        // role not authorised so redirect to home page
        this.router.navigate(['/dashboard']).then(r => {
        });
        return false;
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then(r => {
    });
    return false;
  }
}
