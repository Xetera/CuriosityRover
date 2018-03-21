import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoverComponent } from './app.rover.component';
import { RoverComponent } from './rover/rover.component';
import {HttpModule} from '@angular/http';
import {ApiService} from './services/api.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { PictureComponent } from './picture/picture.component';


@NgModule({
    declarations: [
        AppComponent,
        AppRoverComponent,
        RoverComponent,
        PictureComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule
    ],
    providers: [ApiService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
