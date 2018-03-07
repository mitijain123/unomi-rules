import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headers: any;
  constructor(private http: HttpClient) {
  	this.headers = new HttpHeaders()
    	.set("Authorization", "Basic " + btoa("karaf:karaf") );
    console.log(this.headers);
    console.log(this.http);
  	this.http.get('https://localhost:9443/cxs/rules', { headers: this.headers }).subscribe(data => {
      console.log(data);
    });
	    	
  }

}
