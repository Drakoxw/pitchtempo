import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataGetPitch } from '../models/data-get-pitch';
import { PitchServicesService } from '../pitch-services.service'

@Component({
  selector: 'app-card-full',
  templateUrl: './card-full.component.html',
  styleUrls: ['./card-full.component.css']
})
export class CardFullComponent implements OnInit {


  public card:any[] = [];
  public articulos:DataGetPitch[] = [];
  private idCard:string;
  private tipo!:string;

  @Input() modo?:string;
  @Input() IdCardEd?:string;

  constructor(
    private picthSer: PitchServicesService,
    private route:ActivatedRoute
  ) {
    this.idCard = this.picthSer.idC;
      route.params.subscribe( data => {
        this.idCard = data['id']
      });
    }


  ngOnInit(): void {
    this.picthSer.getArticulo(this.idCard).subscribe((snapCard) => {
      this.card.push({
        data: snapCard.payload.data()
      });
    });

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

  }
}
