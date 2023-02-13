import { Component, ViewChild, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {QrScannerComponent} from 'angular2-qrscanner';
@Component({
  selector: 'app-qrcodescanner',
  templateUrl: './qrcodescanner.component.html',
  styleUrls: ['./qrcodescanner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QrcodescannerComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild(QrScannerComponent, { static: false })
  qrScannerComponent!: QrScannerComponent;

  ngOnInit() {

}

  ngAfterViewInit(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
          let choosenDev;
          for (const dev of videoDevices){
              if (dev.label.includes('front')){
                  choosenDev = dev;
                  break;
              }
          }
          if (choosenDev) {
              this.qrScannerComponent.chooseCamera.next(choosenDev);
          } else {
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
          }
      }
  });

  this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
      if(result=="Eonnex-001-blr"){
        console.log("redirect to anotherpage")
        this.router.navigate(['/threesixty']);
      }else{
        alert("not a valid qr")
      }
  });
  }

}
