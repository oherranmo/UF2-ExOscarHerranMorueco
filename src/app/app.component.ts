import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UF2-ExOscarHerranMorueco';
  data: any;
  constructor(private http: HttpClient) {
    //this.signeZ();
    //this.llistaAssigInfo();
  }
  llistaAssigInfo(){
    this.http.get('http://localhost:3080/exercici1').subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  signeZ() {
    this.http.post<any>('http://localhost:3080/exercici2', {}).subscribe(
      response => console.log(response),
      error => {
        if (error instanceof HttpErrorResponse) {
          console.error(error);
        }
      }
    );
  }
}
