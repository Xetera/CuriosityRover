import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './rover.component.html',
    styleUrls: ['./rover.component.css']
})
export class RoverComponent implements OnInit {
    title: string = 'Rover Images';
    message: string;

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        return this.sendRequest();
    }

    sendRequest(): void{
        this.api.getPictures().then((message: string )=> {
            this.message = message;
        });
    }

}
