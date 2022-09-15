import { Component, Output,EventEmitter,Input} from '@angular/core';
import { Seccion } from 'src/app/Modelos/seccion';
import {Alumno} from './../../Modelos/alumno'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {

  @Input() public secciones:Array<Seccion>=[

  ]

  public alumno:Alumno={
    Rut:0,
    Nombre:'',
    Apellido:'',
    Edad:0,
    TSeccion:{Id:0,NombreSeccion:''} ,

  }

  public cRut(evento:Event):void{
    const ele = evento.target as HTMLInputElement
    this.alumno.Rut = Number.parseInt(ele.value);
  }

  public cNom(evento:Event):void{
    const ele = evento.target as HTMLInputElement
    this.alumno.Nombre = ele.value;
  }


  public cAp(evento:Event):void{
    const ele = evento.target as HTMLInputElement
    this.alumno.Apellido = ele.value;
  }

  public cEd(evento:Event):void{
    const ele = evento.target as HTMLInputElement
    this.alumno.Edad = Number.parseInt(ele.value);
  }

  public cSe(evento:Event):void{
    const ele = evento.target as HTMLSelectElement
    this.alumno.TSeccion= JSON.parse(ele.value) as Seccion;
  }

  // public cSi(evento:Event):void{
  //   const ele = evento.target as HTMLSelectElement
  //   this.alumno.TSeccion.Id= Number.parseInt(ele.value)
  // }

  // public cSo(evento:Event):void{
  //   const ele = evento.target as HTMLSelectElement
  //   this.alumno.TSeccion.NombreSeccion= ele.value
  // }

  @Output() public enviarAlumno = new EventEmitter<Alumno>();

  public guardarAlumno(){
    const copia:Alumno={
      ...this.alumno
    }
    this.enviarAlumno.emit(copia)
  }


}
