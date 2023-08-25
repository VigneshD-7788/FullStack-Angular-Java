import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit{

  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor() {}
  ngOnInit() {

  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
