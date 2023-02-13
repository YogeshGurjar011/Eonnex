import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
@Component({
  selector: 'app-qrcodescanner',
  templateUrl: './qrcodescanner.component.html',
  styleUrls: ['./qrcodescanner.component.css']
})
export class QrcodescannerComponent{

  constructor() {
    this.barcode = "";
    this.scanner = new BarcodeScannerLivestreamComponent;
  }

  @ViewChild('scanner', { static: false }) scanner: BarcodeScannerLivestreamComponent;
  barcode: string;

  ngAfterViewInit() {
    this.scanner.start();
  }

  onValueChanges(result: any) {
    this.barcode = result.codeResult.code;
    console.log(this.barcode)
  }
}
