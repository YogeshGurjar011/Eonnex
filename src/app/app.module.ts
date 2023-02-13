import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ThreeSixtyModule}  from '@mediaman/angular-three-sixty';
import  {NgxScannerQrcodeModule}  from 'ngx-scanner-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrcodescannerComponent } from './qrcodescanner/qrcodescanner.component';
import { HomeComponent } from './home/home.component';
import { ThreesixtyComponent } from './threesixty/threesixty.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodescannerComponent,
    HomeComponent,
    ThreesixtyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreeSixtyModule,
    NgxScannerQrcodeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
