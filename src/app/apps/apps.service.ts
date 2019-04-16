import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class AppsService {
  constructor(private _http: HttpClient,private auth:AuthService) {}
  getProducts() {
    return this._http.get("http://localhost:3000/getproducts", {
      headers: new HttpHeaders().set("authtoken", this.auth.checkLogin())
    });
  }
}
