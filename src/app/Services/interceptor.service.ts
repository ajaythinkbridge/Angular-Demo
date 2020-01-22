import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method


 console.log('IN INTERCEPTOR....');
      // We retrieve the token, if any
      const token = 'temporaryToken';
      let newHeaders = req.headers;
      if (token) {
         // If we have a token, we append it to our new headers
         newHeaders = newHeaders.append('authtoken', token);
         newHeaders = newHeaders.append('Content-Type', 'application/json');
      }
      
      // Finally we have to clone our request with our new headers
      // This is required because HttpRequests are immutable
      const authReq = req.clone({headers: newHeaders});
      console.log('Request with Token:'+ JSON.stringify(authReq));
      // Then we return an Observable that will run the request
      // or pass it to the next interceptor if any
      return next.handle(authReq);
      // return next.handle(authReq).pipe(
      //   // We use the map operator to change the data from the response
      //   map(resp => {
      //      // Several HTTP events go through that Observable 
      //      // so we make sure that this is a HTTP response
      //      if (resp instanceof HttpResponse) {
      //         // Just like for request, we create a clone of the response
      //         // and make changes to it, then return that clone     
      //         return  resp.clone({ body: [{title: 'Replaced data in interceptor'}] });
      //     }
      //   })
      // );

}
}
