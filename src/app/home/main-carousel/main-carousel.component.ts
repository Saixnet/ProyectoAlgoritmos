import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { homeCarouselData } from '../../../Data/mainCarouselData';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit, OnDestroy {
  CarouselData: any;
  currentSlide = 0;
  interval: number | undefined;

  ngOnInit() {
    this.CarouselData = homeCarouselData; // Inicializa  CarouselData
    this.autoPlay(); 
  }

  autoPlay() {
    
    if (typeof window !== 'undefined') {
      this.interval = window.setInterval(() => { 
        this.nextSlide(); 
      }, 3000);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.CarouselData.length;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval); // Limpia el intervalo al destruir el componente
    }
  }
}
