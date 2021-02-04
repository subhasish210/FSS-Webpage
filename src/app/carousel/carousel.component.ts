import { Component, OnInit,ViewChild } from '@angular/core';
//import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = ['../../assets/FSS Top Ranking.jpeg',
            '../../assets/pic1.jpg',
            '../../assets/FSS.jpeg',];
  constructor() { }

  ngOnInit(): void {
  }

}
