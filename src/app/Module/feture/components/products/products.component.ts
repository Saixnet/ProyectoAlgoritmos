import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; 
import { filtros, filtroUnico } from './FilterData';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { pantalonesHombre } from '../../../../../Data/Hombre/Pantalones/pantalonesHombre';
import{ProductCardComponent} from '../../../shared/components/product-card/product-card.component'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatMenuModule,MatDividerModule,MatListModule,MatIconModule,CommonModule,MatCheckboxModule,FormsModule,MatRadioModule,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  filterData:any;
  filtroUnicoDatos:any;
  pantalonesHombre:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute){

  }

  ngOnInit(){

    this.filterData=filtros;
    this.filtroUnicoDatos=filtroUnico;
    this.pantalonesHombre=pantalonesHombre;
  }
  handleMultipleSelectFilter(value:string, sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams};
    console.log("quey params",queryParams);

    const ValoresFiltro= queryParams[sectionId]?queryParams[sectionId].split(","):[];
    const IndexValor=ValoresFiltro.indexOf(value);
    if (IndexValor!=-1) {
      ValoresFiltro.splice(IndexValor,1)
      
    }else{

      ValoresFiltro.push(value);
    }
    if (ValoresFiltro.length>0) {

      queryParams[sectionId]=ValoresFiltro.join(",");
      
    }
    else{
      delete queryParams[sectionId];
    }

  }

}
