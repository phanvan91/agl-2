import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
@Component({
  selector: 'app-bai1-service',
  templateUrl: './bai1-service.component.html',
  styleUrls: ['./bai1-service.component.css'],
  providers: [ApiService]
})
export class Bai1ServiceComponent implements OnInit {
  list;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getlist().subscribe((response:any)=>{
      this.list = response;
      console.log(this.list);
    },error => {
      console.log(error);
    });
  }

}
