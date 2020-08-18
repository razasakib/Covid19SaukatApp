import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveformvalidation',
  templateUrl: './reactiveformvalidation.component.html',
  styleUrls: ['./reactiveformvalidation.component.css']
})
export class ReactiveformvalidationComponent implements OnInit {
  myReactiveForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({
      'uname':new FormControl('saukat'),
      'uemail':new FormControl(null),
      'city':new FormControl('--Select--'),
      'grnder':new FormControl('Male')
    })
  }

   
}
