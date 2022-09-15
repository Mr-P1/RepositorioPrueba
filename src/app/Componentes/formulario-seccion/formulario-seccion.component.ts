import { Component, Output,EventEmitter } from '@angular/core';
import { Seccion } from './../../Modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {

  public seccion:Seccion={
    Id:0,
    NombreSeccion:'',
  }

  public contador:number=0;

  public cId(evento:Event):void{
    const ele = evento.target as HTMLInputElement
    this.seccion.Id=Number.parseInt( ele.value) ;
  }

  public cNo(evento:Event):void{
    const ele = evento.target as HTMLInputElement
    this.seccion.NombreSeccion = ele.value;
  }

  @Output() public enviarSeccion = new EventEmitter<Seccion>();

  public guardarSeccion(){
    const copia:Seccion={
      ...this.seccion
    }
    this.enviarSeccion.emit(copia);
  }


}
