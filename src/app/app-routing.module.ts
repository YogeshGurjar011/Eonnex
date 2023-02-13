import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QrcodescannerComponent } from './qrcodescanner/qrcodescanner.component';
import { ThreesixtyComponent } from './threesixty/threesixty.component';
// import { ThreesixtyComponent } from './threesixty/threesixty.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'qrcode',
    component:QrcodescannerComponent
  },
  {
    path: 'threesixty',
    component:ThreesixtyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
