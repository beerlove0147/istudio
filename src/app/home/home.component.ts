import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // url = 'http://127.0.0.1:5000/';
  url = 'http://localhost:5000/'

  Data : any

  constructor(

    private http:HttpClient
    ) { 
    this.http.post<any>(this.url+'data',{}).subscribe(
      res => {
        console.log(res);
        this.Data = res
        
      }
    )
  }

  ngOnInit(): void {
  }

}
