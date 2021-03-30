import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataGetPitch } from '../models/data-get-pitch';
import { PitchServicesService } from '../pitch-services.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-card-full',
  templateUrl: './card-full.component.html',
  styleUrls: ['./card-full.component.css']
})
export class CardFullComponent implements OnInit {


  public card:any[] = [];
  public articulos:DataGetPitch[] = [];
  idCard:string;
  linkURL!:string;
  tituloSlug!:string;

  @Input() modo?:string;
  @Input() IdCardEd?:string;

  constructor(
    private picthSer: PitchServicesService,
    private route:ActivatedRoute,
    private title:Title,
    private seo:SeoService
  ) {
    this.idCard = this.picthSer.idC;
    route.params.subscribe( data => {
      this.idCard = data['id']
      this.linkURL = `https://picthtempo.com/card/${this.idCard}`
    });
    }


  ngOnInit(): void {
    console.log(`this.idCard`, this.idCard);
    this.picthSer.getArticulo(this.idCard).subscribe((snapCard) => {

      this.card.push({
        data: snapCard.payload.data()
      });
      this.tituloSlug = this.card[0].data.titulo
    });

    let t:string = "Pitch Tempo Reparaciones"
    this.title.setTitle(t)

    this.seo.generarMeta({
      title: `Pitch Tempo - Ventas`,
      description: "Reparación y mantenimiento de consolas DJ, venta de repuestos y consolas nuevas y usadas, importación de repuestos, fabricamos tus cables a medida.",
      keywords: "Consolas DJ, Reparación, Ventas, Manteminiento,Skin de consolas, Fabricación de cables, Venta faders, Pichts, Pulsadores",
      slug: `${this.tituloSlug}`
    })

    this.picthSer.getArticulos().subscribe((snap) => {
      this.articulos = [];
      snap.forEach((arti:any) => {
        this.articulos.push({
          index: arti.payload.doc.data().indice ,
          id : arti.payload.doc.id,
          data : arti.payload.doc.data()
        });
      })

      if (this.card) {
        console.log(`this.linkURL`, this.linkURL);
        console.log(`this.tituloSlug`, this.tituloSlug);
        this.articulos = this.articulos.filter(ele => ele.data.tipo == this.card[0].data.tipo)
      }
    });

  }
}
