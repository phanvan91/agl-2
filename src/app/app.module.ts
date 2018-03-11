import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import{ appRoutes } from './app.router';
import { AppComponent } from './app.component';
import { Bai1ServiceComponent } from './bai1-service/bai1-service.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    Bai1ServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
