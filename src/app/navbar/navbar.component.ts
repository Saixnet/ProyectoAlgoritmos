import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import {NavContentComponent} from "../navbar/nav-content/nav-content.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatMenuModule,CommonModule,NavContentComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentSection:any;
  isNavbarContentOpen:any;
  openNavbarContent(section:any){
    this.isNavbarContentOpen = true;
    this.currentSection=section;


  }
  closeNavbarContent(){
    this.isNavbarContentOpen = false;
  }
  navigateTo(path:any){

  }
  @HostListener('document:click',[`$event`])
onDocumentClick(event:MouseEvent){
  const modalContainer=document.querySelector(".modal-container");
  const openButtons = document.querySelectorAll(".open-button");
  let clickInsideButton=false;
  openButtons.forEach((button:Element) => {
    if(button.contains(event.target as Node)){
      clickInsideButton=true;
    }
    
  });
if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
  this.closeNavbarContent();
  
}
}

}
