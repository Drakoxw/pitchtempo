import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit {

  filtro = 'servicio'

  constructor(private title:Title, private seo:SeoService) { }

  ngOnInit(): void {
    let t:string = "Pitch Tempo Servicio Tecnico"
    this.title.setTitle(t)

    this.seo.generarMeta({
      title: t,
      description: "Reparación por daños, humedad y mantenimiento preventivo, fabricamos cables a medida, personalización de consolas, skin para consolas y equipos DJ.",
      keywords: "Consolas DJ, Reparación, Ventas, Manteminiento, Skin de consolas, Fabricación de cables, Venta faders, Pichts, Pulsadores, Importación de repuestos"
    })
  }

}
