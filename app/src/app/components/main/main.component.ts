import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
  
})
export class MainComponent implements OnInit{
  miPorfolio:any;
  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio= data;
    });


}

}
