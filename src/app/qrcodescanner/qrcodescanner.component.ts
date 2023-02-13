import { Component ,Pipe} from '@angular/core';
import { NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';
@Component({
  selector: 'app-qrcodescanner',
  templateUrl: './qrcodescanner.component.html',
  styleUrls: ['./qrcodescanner.component.css']
})
export class QrcodescannerComponent{

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  public config: ScannerQRCodeConfig = {
    // fps: 100,
    // isBeep: false,
    // decode: 'macintosh',
    // deviceActive: 1,
    constraints: {
      audio: false,
      video: {
        width: window.innerWidth
      }
    }
  };

  constructor(private qrcode: NgxScannerQrcodeService) { }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }


}
