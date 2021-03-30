import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title, private seo:SeoService) { }

  ngOnInit(): void {
    let t:string = "Pitch Tempo Reparaciones"
    this.title.setTitle(t)

    this.seo.generarMeta({
      title: "Pitch Tempo Reparaciones",
      description: "Reparación y mantenimiento de consolas DJ, venta de repuestos y consolas nuevas y usadas, importación de repuestos, fabricamos tus cables a medida.",
      keywords: "Consolas DJ, Reparación, Ventas, Manteminiento,Skin de consolas, Fabricación de cables, Venta faders, Pichts, Pulsadores"
    })

  }

}
