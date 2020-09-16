import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

// Services

// Components

const components = [
];
const services = [
];

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
