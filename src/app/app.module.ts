import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoverComponent } from './app.rover.component';
import { RoverComponent } from './rover/rover.component';
import {HttpModule} from '@angular/http';
import {ApiService} from './services/api.service';
import {HttpClient, HttpClientModule, HttpHandler, HttpHeaders} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        AppRoverComponent,
        RoverComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ApiService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
