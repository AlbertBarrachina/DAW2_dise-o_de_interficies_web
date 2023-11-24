import { Component, OnInit } from '@angular/core';
import { Evento } from './models/evento.model';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eventos: Evento[] = [];
  direcciones: String[] = [];
  selectedDireccion: string = '';
  ngOnInit() {
    // Cargamos el fichero JSON
    const json: any = data;

    // Guardamos el fichero cargado en el array de Eventos
    this.eventos = json;

    // Convertimos las fechas a tipo Date
    this.eventos.map((value) => value.fecha = new Date(value.fecha));

    this.direcciones = this.getDirecciones(json);
  }
  //comprueba si el evento ha pasado o esta por pasar
  isEventPassed(evento: any): boolean {
    const fechaActual = new Date();
    return evento.fecha > fechaActual;
  }

  //obtiene una lista de direcciones donde hay eventos
  getDirecciones(array: any[]): string[] {
    const direccionesUnicas = new Set<string>();
  
    array.forEach(item => {
      direccionesUnicas.add(item.direccion);
    });
  
    return Array.from(direccionesUnicas);
  }
  
  get eventosFiltrados() {
    return this.selectedDireccion
      ? this.eventos.filter(evento => evento.direccion === this.selectedDireccion)
      : this.eventos;
  }

 }
