import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { gif, Gifresponse } from './http-test.interface';
import { gifService } from '../service/gif.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styles: [
  ]
})

export class HttpTestComponent {
  
  @ViewChild('txtquery') txtquery!:ElementRef<HTMLInputElement>;


  limite : number = 10;

  url: string [] = []

  constructor( private service: gifService){}

  limiteGif(limite:number){
    this.service.limiteGif(limite)
  }

  buscar(txt:HTMLInputElement){
    
    this.service.agregarHistorial(txt)

    this.service.buscar(txt)
  }
  
  get resultados(){
    return this.service.getResultados
  }
}