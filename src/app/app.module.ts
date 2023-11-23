import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    DettaglioComponent, 
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
