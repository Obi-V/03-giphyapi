import { Injectable } from "@angular/core";
import { gif, Gifresponse } from '../http-test/http-test.interface';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class gifService{
   
    resultados : gif [] = []

    limite : number = 10;

    private _historial : string [] = []
    
    constructor(private http:HttpClient){
        this._historial = JSON.parse(localStorage.getItem("historial")!) || []
    }

    limiteGif(limite:number){
        this.limite = limite
    }

    botonBuscar(txt:string){
    
        this.http.get<Gifresponse>('https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q='+txt+'&limit='+this.limite)
        .subscribe({
          next:(resp)=>{
            this.resultados = resp.data;
            console.log(this.resultados)
            console.log(this.resultados[0].url)
          }
        })
        
        txt = ''
    }

    buscar(txt:HTMLInputElement){
    
        this.http.get<Gifresponse>('https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q='+txt.value+'&limit='+this.limite)
        .subscribe({
          next:(resp)=>{
            this.resultados = resp.data;
            console.log(this.resultados)
            console.log(this.resultados[0].url)
          }
        })
        
        txt.value = ''
    }

    agregarHistorial(txt:HTMLInputElement){

        this._historial.unshift(txt.value);
        this._historial = this._historial.slice(0,10)

        localStorage.setItem("historial", JSON.stringify(this._historial))
        
        console.log(this._historial)
    }

    get getHistorial():string[]{
        return [...this._historial]
    }

    get getResultados():gif[]{
        return [...this.resultados]
    }
}