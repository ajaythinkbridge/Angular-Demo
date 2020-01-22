import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SmartItemListComponent } from './smart-item-list/smart-item-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './Services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddItemComponent,
    ItemListComponent,
    SmartItemListComponent,
    ToDoListComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
