import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
export type Image = string;

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {

    }
    private static extractImageURL(message){
        return message.img_src;
    }

    getPictures(): Promise<string> {
        console.log('fetching php file');
        return new Promise((resolve => {
            this.http.get('http://localhost:9000',
                {
                    responseType: 'text',
                    headers: {
                        'camera': 'FHAZ',
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }).toPromise().then((resp: string) => {
                console.log(resp);
                let file = JSON.parse(resp);
                let urls: string[] = file.photos.map(ApiService.extractImageURL);
                console.log(file.photos);
                resolve(JSON.stringify(file));
            });
        }))
    }
}
