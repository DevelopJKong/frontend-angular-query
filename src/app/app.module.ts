import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/pages/to-do-page/to-do-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, ToDoComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
