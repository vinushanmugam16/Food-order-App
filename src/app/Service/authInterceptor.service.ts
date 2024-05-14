import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token =sessionStorage.getItem('token');
    console.log(token);
    request = request.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });
    return next.handle(request);
  }
}