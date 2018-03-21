import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, } from '@angular/http';
import 'rxjs/add/operator/map'
import {CameraType, Picture} from '../interfaces/nasa';
export type Image = string;

@Injectable()
export class ApiService {
    private camera: CameraType = 'CHEMCAM';
    private headers: HttpHeaders;
    private page: number = 1;
    public pictures: Picture[] = [];
    constructor(private http: HttpClient
    ) {
        this.headers = new HttpHeaders();
    }

    public setCamera(camera: CameraType){
        this.camera = camera;
    }

    public incrementPage(){
        this.page++;
    }


    private setHeaders(camera: string, page: number){
        this.headers = this.headers.set('Camera', this.camera).set('Page', this.page.toString());
    }

    private static extractAllImageURL(pictures: Picture[]): string[]{
        return pictures.map(picture => picture.img_src);
    }

    private static extractImageURL(picture: Picture){
        return picture.img_src;
    }

    getPictures(): Promise<Picture[]> {
        console.log('fetching php file');
        this.setHeaders('', this.page);
        console.log(this.headers);
        return new Promise((resolve => {
            this.http.get('http://localhost:9000',{responseType: 'text', headers: this.headers}).subscribe((resp: string) => {
                console.log(resp);
                console.log(`current page: ${this.page}`);
                let pictures: Picture[];
                pictures = JSON.parse(resp).photos;
                this.pictures = this.pictures.concat(pictures);
                console.log(pictures);
                resolve(pictures);
            });
        }))
    }
}
