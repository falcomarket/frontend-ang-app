
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {
  

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Vous pouvez intercepter et modifier la requête ici
    console.log('Intercepted request:', req);

    // Laissez la requête continuer normalement
    return next.handle(req);
  }
}
