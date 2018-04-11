import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Picture} from '../interfaces/nasa';
import {Observable} from 'rxjs/Observable';
import {Observable as Observ} from 'rxjs';
import {sendRequest} from 'selenium-webdriver/http';

@Component({
    selector: 'rover',
    templateUrl: './rover.component.html',
    styles: [
        `.pictures {
            height: 20rem;
            overflow: scroll;
        }`
    ],
    styleUrls: ['./rover.component.css'],
})
export class RoverComponent implements OnInit {
    title: string = 'Rover Images';
    message: string;
    public pictures: Picture[] = [];
    public APIReady: boolean = true;
    constructor(private api: ApiService) {}

    ngOnInit() {
        this.sendRequest();
        // anonymous function since we don't want to create a new 'this' variable
        Observ.fromEvent(window, 'scroll')
            .throttleTime(500)
            .subscribe(() => this.checkScrollPosition());
    }
    public checkScrollPosition(){
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            console.log('scrolled to the bottom');
            if (this.APIReady) this.sendRequest();
        }
    }
    public sendRequest(): void {
        this.api.getPictures().subscribe((message: Picture[])=> {
            //console.log(message);
            console.log(message);
            this.pictures = this.pictures.concat(message);
            this.api.incrementPage();
        });
    }
}
