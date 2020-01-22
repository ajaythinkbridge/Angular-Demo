import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() outputToParent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  txtToDoTask = "";
  NotificationToParent(txtToDoTask) {
    //console.log('Setting Value in child:' + txtToDoTask);
    this.outputToParent.emit(txtToDoTask);
    this.txtToDoTask = null;
  }

}
