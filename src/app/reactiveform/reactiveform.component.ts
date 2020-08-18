import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public frmRegister = new FormGroup({
    name: new FormControl(""),
    price: new FormControl(""),
    frmDetails: new FormGroup({
      city: new FormControl(""),
      IsInStock: new FormControl("")
    })
  });

  public updateDetails() {
    this.frmRegister.patchValue({
      name: "Samsung Tv",
      frmDetails: {
        city: "HYD",
        IsInStock: true
      }
    });
  }
}
