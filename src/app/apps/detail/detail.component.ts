import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppsService } from "../apps.service"; // including service
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
  providers: [AppsService]
})
export class DetailComponent implements OnInit {
  product: any;
  productslist: any = []; //??
  selproduct: any;
  cancelSubscription: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _appsService: AppsService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(data => {
      this.product = data.pid;
    });
    this.cancelSubscription = this._appsService
      .getProducts()
      .subscribe(datal => {
        // subscribe is like then in angular to handle promises or async functions
        this.productslist = datal;
      });
  }
  backtolist() {
    this._router.navigate(["/products"]);
  }
}
