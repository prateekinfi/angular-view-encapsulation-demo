import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { NoneComponent } from './none/none.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    ShadowDomComponent,
    NoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
