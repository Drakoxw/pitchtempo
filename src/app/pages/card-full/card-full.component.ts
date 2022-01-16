import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataGetPitch } from '../../shared/models/data-get-pitch';
import { PitchServicesService } from '../../shared/services/pitch-services.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../shared/services/seo.service';

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
    private router: Router,
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
    this.load()

    this.seo.generarMeta({
      title: `Pitch Tempo - Ventas`,
      description: "Reparación y mantenimiento de consolas DJ, venta de repuestos y consolas nuevas y usadas, importación de repuestos, fabricamos tus cables a medida.",
      keywords: "Consolas DJ, Reparación, Ventas, Manteminiento,Skin de consolas, Fabricación de cables, Venta faders, Pichts, Pulsadores",
      slug: 'card/'+ this.tituloSlug
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
        this.articulos = this.articulos.filter(ele => ele.data.tipo == this.card[0].data.tipo)
      }
    });

    let t:string = "Pitch Tempo Venta - "+ this.card[0].data.tipo;
    this.title.setTitle(t)

  }


  load(){
    this.picthSer.getArticulo(this.idCard).subscribe((snapCard) => {
      this.card = []
      this.card.push({
        data: snapCard.payload.data()
      });
      this.tituloSlug = this.card[0].data.titulo.replace(/\s/g, '')
    });
  }

  reload(url:string){
    this.router.navigateByUrl(`/cables`, { skipLocationChange: true })
    .then(() => {
      this.router.navigate(['/card/'+ url]);
    })
  }
}
