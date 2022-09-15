import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/Modelos/alumno';
import {RegistroHistorial} from './../../Modelos/registro-historial'

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent  {

  @Input() public registro!:RegistroHistorial;

  @Input() public listarAlumnos:Array<Alumno>=[

  ]

}
