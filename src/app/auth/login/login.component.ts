import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService, private _route: Router) {}
  auth: any = {};
  ngOnInit() {
    localStorage.removeItem("token");
  }

  login() {
    // console.log(this._auth.checkValues(this.auth));
    this._auth.checkValues(this.auth);
    //localStorage.setItem('isLogin','true');
  }
}
