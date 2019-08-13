import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: '05091989'
      })
    });
    return next.handle(authReq);
  }
}
