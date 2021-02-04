import { Component, AfterViewInit,ElementRef, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title = 'Map';
  lat = 12.8358;
  lng = 80.2227;
  constructor() { }

  ngOnInit(): void {

  }
  

}
