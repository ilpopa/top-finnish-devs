import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { DevsComponent } from './devs/devs.component';
import { DevsService } from "./devs.service";

// Define the routes
const ROUTES = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'devs/:lang',
    component: DevsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DevsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DevsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
