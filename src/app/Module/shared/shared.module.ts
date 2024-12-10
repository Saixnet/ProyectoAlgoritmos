import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { pantalonesHombre } from '../../../Data/Hombre/Pantalones/pantalonesHombre';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavContentComponent,
    pantalonesHombre
  ],
  imports: [
    CommonModule,MatIconModule,MatButtonModule,MatMenuModule
  ],
  exports:[

    NavbarComponent,
    FooterComponent,
    pantalonesHombre
  ]
})
export class SharedModule { }
