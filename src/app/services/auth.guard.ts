import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result = this.checkLogin(state.url, route.data['roles']);
      
    if (this.isObservable(result)) {
      result.subscribe(
        value => console.log('Observable Value:', value),
        error => console.error('Observable Error:', error),
        () => console.log('Observable Completed')
      );
    } else if (result instanceof Promise) {
      result.then(
        value => console.log('Promise Value:', value),
        error => console.error('Promise Error:', error)
      );
    } else if (result instanceof UrlTree) {
      const primaryOutlet = result.root.children['<router-outlet></router-outlet>'];
      if (!primaryOutlet || primaryOutlet.segments.some(segment => segment.path === '**') || !this.authService.isLoggedIn()) {
        console.log('Invalid URL or User is not logged in:', state.url);
        return this.router.createUrlTree(['/not-found']); // Redirige vers une page d'erreur 404
      }
    } else {
      console.log('Result:', result);
    }
  
    return result;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

  private isObservable(obj: any): obj is Observable<any> {
    return !!obj && typeof obj.subscribe === 'function';
  }

  private checkLogin(url: string, roles: string[] | undefined): boolean | UrlTree {
    const userRole = this.authService.getUserRole() || 'guest';

    if (this.authService.isLoggedIn()) {
      // Vérifie si le rôle de l'utilisateur est autorisé à accéder à la route
      const userRoles = Array.isArray(userRole) ? userRole : [userRole];
      if(roles && !roles.some(role => userRole.includes(role)))  {
        console.log('User role is not authorized to access this route:', url);
        return this.router.createUrlTree(['/not-found']); // Redirige vers une page d'erreur 404
      }

    }
    if (url.endsWith('/edit') && userRole.includes('user')) {
      console.log('User role is not authorized to access this route:', url);
      return this.router.createUrlTree(['/not-found']); // Redirige vers une page d'erreur 404
    }
      console.log('User is logged in with role:', userRole);
      return true;
    

    // Redirige vers la page de connexion
    const urlTree = this.router.createUrlTree(['/login'], { queryParams: { returnUrl: url } });
    console.log('Redirecting to:', urlTree.toString());
    return urlTree;
  }
}

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(state.url);
  }*/
  /*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result = this.checkLogin(state.url);
    
    if (this.isObservable(result)) {
        result.subscribe(
            value => console.log('Observable Value:', value),
            error => console.error('Observable Error:', error),
            () => console.log('Observable Completed')
        );
    } else if (result instanceof Promise) {
        result.then(
            value => console.log('Promise Value:', value),
            error => console.error('Promise Error:', error)
        );
    } else if (result instanceof UrlTree) {
        const primaryOutlet = result.root.children['<router-outlet></router-outlet>'];
        if (!primaryOutlet || primaryOutlet.segments.some(segment => segment.path === '**') || !this.authService.isLoggedIn()) {
            console.log('Invalid URL or User is not logged in:', state.url);
            return this.router.createUrlTree(['/not-found']); // Redirige vers une page d'erreur 404
        }
    } else {
        console.log('Result:', result);
    }

    return result;
}

private isObservable(obj: any): obj is Observable<any> {
    return !!obj && typeof obj.subscribe === 'function';
}

private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
        console.log('User is logged in.');
        return true;
    }

    // Redirige vers la page de connexion
    const urlTree = this.router.createUrlTree(['/login'], { queryParams: { returnUrl: url } });
    console.log('Redirecting to:', urlTree.toString());
    return urlTree;
}
*/

/*
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn!) { return true; }

    // Stocker l'URL demandée pour la redirection ultérieure
    this.authService.redirectUrl = url;

    // Redirige vers la page de connexion
    this.router.navigate(['/login']);
    return false;
  }
}*/


