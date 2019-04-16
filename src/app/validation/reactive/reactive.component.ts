import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"]
})
export class ReactiveComponent implements OnInit {
  userForm: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    //each key value pair in the form group will be form controls to  elements in the form
    this.userForm = this._fb.group({
      firstname: ["", [Validators.required, Validators.minLength(5)]], //initial value and validators
      lastname: [""],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$")
        ]
      ],
      gender: ["", Validators.required]
    });
  }
  updateValidity(value) {
    const lastnameCtrl = this.userForm.get("lastname");
    if (value == "male") {
      lastnameCtrl.setValidators(Validators.required); // or we can pass an array [Validators.required,Validators.minLength(5)]
    } else {
      lastnameCtrl.clearValidators();
    }
    lastnameCtrl.updateValueAndValidity(); // for checking for the updated value
  }
}
