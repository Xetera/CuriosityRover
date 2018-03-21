import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
    public src: string;

    constructor() {

    }

    ngOnInit() {
    }

}
