import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-docker',
  template: `
  <h1>Angular Frontend</h1>
  <button (click)="getData()">Get Data</button>
  <div *ngIf="responseData">
  <p>Data from the backend: {{responseData.message}}</p>
  </div>
  `,
  styleUrls: ['./docker.component.css']
})
export class DockerComponent implements OnInit {
responseData : any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  getData(){
    this.dataService.getData().subscribe( data =>{
      this.responseData = data;
    });
  }
}
