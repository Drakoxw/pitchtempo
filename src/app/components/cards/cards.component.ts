import { Component, Input, OnInit } from '@angular/core';
import { DataGetPitch } from '../../shared/models/data-get-pitch';
import { PitchServicesService } from '../../shared/services/pitch-services.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() clave?:string;
  @Input() filtro?:string;
  @Input() filtro2?:string;
  @Input() funt?:any;
  articulos:DataGetPitch[] = [];
  linkC:string = 'https://picthtempo.com/card/'

  constructor(private picthSer:PitchServicesService) { }

  ngOnInit(): void {
    this.picthSer.getArticulos().subscribe((snap) => {
      this.articulos = [];
      snap.forEach((arti:any) => {
        this.articulos.push({
          index: arti.payload.doc.data().indice ,
          id : arti.payload.doc.id,
          data : arti.payload.doc.data()
        });
      })
      this.ordenar()
      if (this.filtro) {
        this.articulos = this.articulos.filter(ele => ele.data.tipo == this.filtro)
      }
      if (this.filtro2) {
        this.articulos = this.articulos.filter(ele => ele.data.pagina == this.filtro2)
      }
    });
  }
  ordenar(){
    this.articulos.sort(function (a, b) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
  }

  setId(id:string){
    this.picthSer.handleId(id)
  }

  editar(id:string){
    this.picthSer.handleId(id)

    this.picthSer.getArticulo(id).subscribe((snapArt) => {
      this.picthSer.articulo = snapArt.payload.data();
      this.funt()
    })
  }

  eliminar(id:string){
    let ok = confirm('Desea Eliminar este Articulo?')
    if (ok) {
      this.picthSer.deleteArticulo(id)
    }
  }

}
