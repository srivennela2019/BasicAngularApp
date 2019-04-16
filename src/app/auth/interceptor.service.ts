import { Injectable } from "@angular/core";
import { HttpInterceptor,HttpHeaders } from "@angular/common/http";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  constructor(private auth:AuthService) {}
  intercept(req: any, next: any) {
    var dupreq = req.clone({
      headers:new HttpHeaders().set('authtoken',this.auth.checkLogin())
    });
    console.log("hello");
    return next.handle(dupreq);
  }
}
