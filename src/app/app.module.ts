import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HerosSearchLandingModule } from './modules/heros-search-landing/heros-search-landing.module';
import { NgxsModule } from '@ngxs/store';
import { HerosState } from './store/heros/heros.state';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { HttpClientModule } from '@angular/common/http';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ApiErrorDialogComponent } from './components/api-error-dialog/api-error-dialog.component';
import { ApiErrorState } from './store/api-error/api-error.state';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ApiErrorDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HerosSearchLandingModule,
    MaterialModule,
    NgxsModule.forRoot([HerosState, ApiErrorState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
