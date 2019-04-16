import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  ratingVal: any = [];
  @Output() ratingEvent: EventEmitter<String> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.ratingVal = Array(Math.round(this.rating)).fill(
      Math.round(this.rating)
    );
  }
  senddatatoParent() {
    this.ratingEvent.emit("rating" + this.rating);
  }
}
