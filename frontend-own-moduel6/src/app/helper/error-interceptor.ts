import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from '../serviceShop/auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private router: Router, private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse){
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse){
        if (err.status === 401){
          this.authService.logout();
          this.router.navigate(['/login']);
        } else if (err.status === 403){
          this.router.navigate(['/']);
        }
      }
    }));
  }
}
