import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.scss']
})
export class ParentTwoComponent implements OnInit {

  items = ['item1', 'item2', 'item3', 'item4'];
  constructor() {}
  ngOnInit() {
    
  }

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log("Current items"+":"+this.items)
  }

}
