import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DrmrModule } from './drmr/drmr.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { from } from 'rxjs';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DrmrModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
