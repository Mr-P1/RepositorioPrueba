import { Component } from '@angular/core';
import {Seccion} from './Modelos/seccion';
import {Alumno} from './Modelos/alumno';
import {RegistroHistorial} from './Modelos/registro-historial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebaJose';

  public nombre:String='Juan';

  public listarSecciones:Array<Seccion>=[

  ]

  public hoy:number=Date.now();

  public escucharSeccion(NuevaS:Seccion):void{
    this.listarSecciones.push(NuevaS);
  }

  public listarAlumnos:Array<Alumno>=[
    {
      Rut:202,
      Nombre:'Jose',
      Apellido:'Salvo',
      Edad:20,
      TSeccion:{Id:1,NombreSeccion:'mat02'}
    }
  ]

  public listarRegistros:Array<RegistroHistorial>=[

    {
      fecha:this.hoy,
      TAlumno:{Rut:12,Nombre:'Jose',Apellido:'asd',Edad:12,TSeccion:{Id:2,NombreSeccion:'APL!'}}
    }

  ]



  public escucharAlumno(NuevoA:Alumno):void{
    this.listarAlumnos.push(NuevoA);
  }

}
