import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private api: ApiService) { }

    get pictureCount() {
        return this.api.pictures.length;
    }

    ngOnInit() {

    }

}
