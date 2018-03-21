import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Picture} from '../interfaces/nasa';
import {InfiniteScrollDirective} from 'ngx-infinite-scroll';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { throttleTime } from 'rxjs/operators';
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
        window.addEventListener('scroll',() =>  this.checkScrollPosition());
    }
    public checkScrollPosition(){
        if ( window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            console.log('scrolled to the bottom');
            if (this.APIReady) this.sendRequest();
        }
    }
    public sendRequest(): void {
        this.APIReady = false;
        this.api.getPictures().then((message: Picture[])=> {
            this.pictures = this.pictures.concat(message);
            console.log(this.pictures);
            this.api.incrementPage();
        });
        // I know I could be using throttleTime for this but
        // I really couldn't figure out how observables work
        setTimeout(() => {
            this.APIReady = true;
            console.log('now ready')
        }, 2000);
    }
}
