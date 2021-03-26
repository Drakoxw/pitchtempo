import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  filtro = 'ventas'

  constructor(private title:Title, private seo:SeoService) { }

  ngOnInit(): void {
    let t:string = "Pitch Tempo Ventas y Repuestos"
    this.title.setTitle(t)

    this.seo.generarMeta({
      title: t,
      description: "Venta de consolas DJ nuevas o usadas, venta de repuestos picths, faders,pulsadores y knobs, importación de tarjetas y todo en repuestos originales.",
      keywords: "Consolas DJ, Reparación, Ventas, Manteminiento, Skin de consolas, Fabricación de cables, Venta faders, Pichts, Pulsadores, Importación de repuestos",
      slug: "tienda"
    })
  }

}
