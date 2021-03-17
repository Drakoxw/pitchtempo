import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { PicthServiceService } from '../service/picth-service.service';

@Component({
  selector: 'app-card-full',
  templateUrl: './card-full.component.html',
  styleUrls: ['./card-full.component.css']
})
export class CardFullComponent implements OnInit {


  public card:any[] = [];
  //private idCard:string;

  @Input() modo?:string;
  @Input() IdCardEd?:string;

  constructor(
    /* private picthSer: PicthServiceService,
    private route:ActivatedRoute */
  ) {
    /* this.idCard = this.picthSer.idC;
      route.params.subscribe( data => {
        this.idCard = data['id']
      });
      if (this.IdCardEd) {
        console.log('from constructor',this.IdCardEd);
      } */
    }


  ngOnInit(): void {
   /*  this.picthSer.getArticulo(this.idCard).subscribe((snapCard) => {
      this.card.push({
        data: snapCard.payload.data()
      });
    });
    console.log('from constructor',this.IdCardEd);
 */
  }
}
