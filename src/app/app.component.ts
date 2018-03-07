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

  constructor(private http: HttpClient) {
  	let header = new HttpHeaders();
    header.append('Authorization',"Basic " + btoa("karaf:karaf") );

  	this.http.get('https://localhost:9443/cxs/rules', { headers: header }).subscribe(data => {
      console.log(data);
    });
	    	
  }

}
