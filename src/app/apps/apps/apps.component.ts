import { Component, OnInit, OnDestroy, Inject } from "@angular/core"; //use inject to inject anthing other than a class
import { AppsService } from "../apps.service"; // including service
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { JQ_TOKEN } from "../../plugins/jquery.service";
@Component({
  selector: "app-apps",
  templateUrl: "./apps.component.html",
  styleUrls: ["./apps.component.css"],
  providers: [AppsService] // insert service in providers also
})
export class AppsComponent implements OnInit, OnDestroy {
  pageTitle: String = "PRODUCTS";
  products: any = [];
  cancelSubscription: any;
  constructor(
    private _appsService: AppsService,
    private _router: Router,
    private _auth: AuthService,
    @Inject(JQ_TOKEN) private jQuery:any
  ) {
    // insert services in  constructor to use them , '_' before variable name is a naming convention
  }
  ngOnInit() {
    this.cancelSubscription = this._appsService
      .getProducts()
      .subscribe(data => {
        // subscribe is like then in angular to handle promises or async functions
        this.products = data;
      });
    this.jQuery("#btn").click(function(){
      alert("hello!I am jquery test");
    });
  }
  showhideImg: Boolean = true;
  buttonHide(): void {
    this.showhideImg = !this.showhideImg; // can reference variable using this keyword
  }
  recievedatafromChild(rating: string) {
    this.pageTitle = rating;
  }
  ngOnDestroy() {
    this.cancelSubscription.unsubscribe(); // deactivating the subscription to release memory
  }
}
//observables are the promises of angular
