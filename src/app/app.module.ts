import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoverComponent } from './app.rover.component';
import { RoverComponent } from './rover/rover.component';
import {ApiService} from './services/api.service';
import {HttpClient, HttpClientModule, HttpHandler, HttpHeaders} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        AppRoverComponent,
        RoverComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [ApiService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
