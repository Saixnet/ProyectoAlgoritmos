import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Asegúrate de que la ruta sea correcta
import{ NavbarComponent } from '../app/navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent,FooterComponent], // Importa HomeComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Asegúrate de que sea 'styleUrls'
})
export class AppComponent {
  title = 'ecommerce';
}

