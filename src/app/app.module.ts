import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/pages/to-do-page/to-do-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ToDoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
