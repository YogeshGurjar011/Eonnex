import { Component, OnInit } from '@angular/core';
import { HotspotInterface } from '@mediaman/three-sixty/dist/interfaces/hotspot.interface';
@Component({
  selector: 'app-threesixty',
  templateUrl: './threesixty.component.html',
  styleUrls: ['./threesixty.component.css']
})
export class ThreesixtyComponent implements OnInit {

  constructor() { }

  public threeSixtyImages: string[] = [
    'http://example.com/image-0.jpg',
    'http://example.com/image-1.jpg',
    'http://example.com/image-2.jpg',
    'http://example.com/image-3.jpg',
    'http://example.com/image-4.jpg',
    'http://example.com/image-5.jpg'
];


public hotspots: HotspotInterface[] = [
  {
      text: 'Lorem ipsum 1',
      angle: 0.78,
      endAngle: 0.95,
      top: '25%',
      left: '27.5%'
  },
  {
      text: 'Lorem ipsum 2',
      angle: 0.4,
      endAngle: 0.6,
      top: '65%',
      left: '60%'
  }
];

  ngOnInit(): void {
  }

}
