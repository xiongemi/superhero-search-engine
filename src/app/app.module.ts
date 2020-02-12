import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { HerosSearchLandingModule } from './heros-search-landing/heros-search-landing.module';
import { NgxsModule } from '@ngxs/store';
import { HerosState } from './store/heros/heros.state';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { HttpClientModule } from '@angular/common/http';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HerosSearchLandingModule,
    MaterialModule,
    NgxsModule.forRoot([HerosState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
