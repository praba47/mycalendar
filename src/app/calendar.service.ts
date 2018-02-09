import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
 import 'rxjs/add/observable/of';
 import 'rxjs/add/operator/map';

 import { Response } from '@angular/http';
 import 'rxjs/add/operator/map';

@Injectable()
export class CalendarService {

    constructor (
        private http: HttpClient
    ) {}

   // writerUrl = "../assets/getTaskDetails.json";
    getJsonUrl = "../assets/getEvents.json";

    // getTaskDetails(): Observable<any> {
    //     let data: any;
    //      data = this.http.get(this.getJsonUrl, {responseType: 'json'});
    //      console.log("data",data);
    //      return data;
    // }

    getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let datas : any;
        datas = this.http.get(this.getJsonUrl, {responseType: 'json'});

        

        /* 
        datas = [{
            "title": "All Day Event",
            "start": yearMonth + '-01'
        },
        {
            "title": 'Long Event',
            "start": yearMonth + '-07',
            "end": yearMonth + '-10'
        }];     */
            
        return datas;
    }

};
