import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-smart-item-list',
  templateUrl: './smart-item-list.component.html',
  styleUrls: ['./smart-item-list.component.css']
})
export class SmartItemListComponent implements OnInit {
  @Input() toDoArray: any;
  @Input() status: string;
  @Output() completeEvent = new EventEmitter();
  @Output() incompleteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public addItemInArray(item) {
    if (this.status == 'Incomplete')
      this.completeEvent.emit(item);
    else
      this.incompleteEvent.emit(item);
  }

  public deleteItemFromArray(index) {
    this.toDoArray.splice(index, 1);
  }
}
