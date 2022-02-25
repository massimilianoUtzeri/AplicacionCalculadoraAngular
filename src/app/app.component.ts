import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';

  //Declaramos e inicializamos 3 variables (Para hacer un binding bidireccional)
  
  numero1:number = 0;

  numero2:number = 0;

  resultado:number = 0;

  sumar():number{

    this.resultado = this.numero1+this.numero2;

    return this.resultado;
    
  }

  restar():number{

    this.resultado = this.numero1-this.numero2;

    return this.resultado;
  }

  multiplicar():number{

    this.resultado = this.numero1*this.numero2;

    return this.resultado;
  }

  dividir():number{

    this.resultado = this.numero1/this.numero2;

    return this.resultado;
  }

}
