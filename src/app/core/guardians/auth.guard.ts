import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
 
  /**
  * @author Juan Balboa Rojas
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
        // Si no hay token, redirige al login
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
}