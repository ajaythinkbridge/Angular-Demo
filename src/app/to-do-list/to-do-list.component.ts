import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../Services/to-do.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.actionTakenList=[];
    localStorage.removeItem("toDoListActions");
    this.getIncompleteListFromApi();
  }

  completeList = [];
  inCompleteList = [];
  actionTakenList: { actionTaken: string, actionValue: string }[];
  getIncompleteListFromApi() {
    this.toDoService.getToDosFromApi().subscribe(
      (data: any) => { this.inCompleteList = data },
      err => console.error(err),
      () => console.log('data loading done')
    );
    
  }

  // *************************
  GetOutputVal(event) {
    if (event) {
      this.addItemToIncompleteList({
        "title": event
      });
    }
  }

  completeEvent(event) {
    this.addItemToCompleteList(event);
    this.deleteItemFromInCompleteList(event);
  }

  incompleteEvent(event) {
    this.addItemToIncompleteList(event);
    this.deleteItemFromcompleteList(event);
  }

  // ****************************

  public addItemToIncompleteList(item) {
    if (item) {
      this.inCompleteList.push(item);
      this.setActionInLocalStorage("ItemAddedToInCompleteList",item);

      this.toDoService.sendDataToApi(item).subscribe(
        (data: any) => { console.log('Response received: '+JSON.stringify(data)) },
        err => console.error(err),
        () => console.log('data loading done')
      );

    }
  }

  public addItemToCompleteList(item) {
    if (item) {
      this.completeList.push(item);
      this.setActionInLocalStorage("ItemAddedToCompleteList",(item));
    }
  }

  public deleteItemFromcompleteList(item) {
    this.completeList.splice(item, 1);
    this.setActionInLocalStorage("ItemDeletedFromCompleteList",(item));
  }

  public deleteItemFromInCompleteList(item) {
    this.inCompleteList.splice(item, 1);
    //this.actionTakenList.push({ actionTaken: "ItemDeleted", actionValue: JSON.stringify(item) });
    //localStorage.setItem('toDoListActions', JSON.stringify(this.actionTakenList));  
    this.setActionInLocalStorage("ItemDeletedFromIncompleteList",(item));
  }

  setActionInLocalStorage(actionTaken,actionValue)
  {
    this.actionTakenList.push({ actionTaken: actionTaken, actionValue: JSON.stringify(actionValue) });
    localStorage.setItem('toDoListActions', JSON.stringify(this.actionTakenList));
    
  }

}
