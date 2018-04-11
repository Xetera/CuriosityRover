import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, } from '@angular/http';
import 'rxjs/add/operator/map'
import {CameraType, Picture, Rover} from '../interfaces/nasa';
import {Observable} from 'rxjs/Observable';
import {debounce} from 'rxjs/operator/debounce';
export type Image = string;

@Injectable()
export class ApiService {
    private camera: CameraType = 'CHEMCAM';
    private headers: HttpHeaders;
    private page: number = 1;
    public pictures: Picture[] = [];
    public curiosity: Rover;
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

    getPictures(): Observable<Picture[]> {
        console.log('fetching php file');
        this.setHeaders('', this.page);
        //console.log(this.headers);
        return this.http.get('http://localhost:9000',{responseType: 'text', headers: this.headers})
            .map((resp: string) => JSON.parse(resp)['photos'])

    }
}
