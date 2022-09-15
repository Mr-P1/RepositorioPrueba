import { Component, Input } from '@angular/core';
import {Alumno} from './../../Modelos/alumno';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.scss']
})
export class ListaAlumnoComponent {

  @Input() public alumnos!:Array<Alumno>;


}
