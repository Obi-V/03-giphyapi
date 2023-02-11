import { Component } from '@angular/core';
import { gifService } from '../service/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})

export class SidebarComponent {

  get historial(){
    return this.service.getHistorial
  }

  constructor(private service :gifService){}

  limiteGif(limite:number){
    this.service.limiteGif(limite)
  }

  botonBuscar(txt:string){
  
    this.service.botonBuscar(txt)
  }

  buscar(txt:HTMLInputElement){
        
    this.service.agregarHistorial(txt)

    this.service.buscar(txt)

    
  }
}
