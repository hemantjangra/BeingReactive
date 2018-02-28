import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiRoot : string = "http://httpbin.org";

  title = 'app';

  constructor(private http: Http){

  }
  
  ngOnInit(){
    
  }

  public doGet(){
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res=> console.log(res.json()));
  }

  public doPost(){
    let url = `${this.apiRoot}/post`; 
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.post(url, {search: search}).subscribe(res=> console.log(res.json()));
  }

  public doPut(){
    let url = `${this.apiRoot}/put`;
    let search = new URLSearchParams();
    search.set('foo', 'ooo');
    //search.set('limit', '20');
    this.http.put(url, {search: search}).subscribe(res=> console.log(res.json()));
  }

  public doDelete(){
   let url = `${this.apiRoot}/delete`;
   this.http.delete(url).subscribe(res => console.log(res.json()));
  }

  public doGetAsPromise(){

  }

  public doGetAsPromiseError(){

  }

  public doGetAsObservableError(){

  }

}

