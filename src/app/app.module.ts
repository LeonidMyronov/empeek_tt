import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemServiceService } from "./core/item-service.service";
import { HeaderComponent } from './header/header.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemComponent } from './items/item/item.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { StartItemComponent } from './items/start-item/start-item.component';
import {AppRoutingComponent} from "./app-routing.module";
import {UserSessionService} from "./core/user-session.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsListComponent,
    ItemComponent,
    SearchPanelComponent,
    StartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingComponent
  ],
  providers: [ItemServiceService, UserSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
