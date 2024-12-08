import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent {

  category:any;
  @Input()selectedSection:any;

}
