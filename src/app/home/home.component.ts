import { Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component"; // Asegúrate de usar la ruta correcta
import { HomeProductCardComponent } from "./home-product-card/home-product-card.component"; // Asegúrate de usar la ruta correcta
import { RopaHombres } from '../../Data/Men/hombres'; // Verifica que la ruta sea correcta
import { RopaMujeres } from '../../Data/Women/mujeres';
import { RopaNinos } from '../../Data/Ninos/ninos';
import { RopaNinas } from '../../Data/Ninas/ninas';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MainCarouselComponent, ProductSliderComponent, HomeProductCardComponent] // Añadir aquí ProductSliderComponent
})
export class HomeComponent implements OnInit {
  RopaHombres: any;
  RopaMujeres:any;
  RopaNinos:any;
  RopaNinas:any;
  ngOnInit() {
    this.RopaHombres = RopaHombres.slice(0,5);
    this.RopaMujeres = RopaMujeres.slice(0,5);
    this.RopaNinos = RopaNinos.slice(0,5);
    this.RopaNinas = RopaNinas.slice(0,5);

    
  }
}
