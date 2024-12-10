import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './components/feture.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';



@NgModule({
  declarations: 
  [
    FetureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    FetureComponent,


  ]
})
export class FetureModule { }
