import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SummaryComponent } from './summary/summary.component';
import { ListTableComponent } from './list-table/list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SummaryComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
