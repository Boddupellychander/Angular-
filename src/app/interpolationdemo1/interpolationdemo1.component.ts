import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolationdemo1',
  templateUrl: './interpolationdemo1.component.html',
  styleUrls: ['./interpolationdemo1.component.css']
})
export class Interpolationdemo1Component implements OnInit {

  name="Thanesh";
  getInlineFunc(){
    return "Just For Demo"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
