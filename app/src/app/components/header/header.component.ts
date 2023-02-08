import { Component, OnInit } from '@angular/core';
import { PorfolioService } from  'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  
})
export class HeaderComponent implements OnInit{
  miPorfolio:any;
  
  constructor(private datosPortafolio:PorfolioService){}

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data=>{});
    //this.miPorfolio
  }

}
