import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../app/Module/feture/components/home/home.component'; // Asegúrate de que la ruta sea correcta
import{ NavbarComponent } from '../app/Module/shared/components/navbar/navbar.component';
import { FooterComponent } from "../app/Module/shared/components/footer/footer.component";
import { ProductsComponent } from "./Module/feture/components/products/products.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, FooterComponent, ProductsComponent,ProductsComponent], // Importa HomeComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Asegúrate de que sea 'styleUrls'
})
export class AppComponent {
  title = 'ecommerce';
}

