import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PitchServicesService }  from '../pitch-services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('inputimg')
  inputimg!: ElementRef;

  public modalClass:string = "bg"
  passp= 'admin';
  mod='';

  public uploadPercent!:any //Observable<any>;
  public downloadURL!: Observable<string>;
  linnkImg!:string;
  articulos!:any;
  articulo = {
    subtitulo : '', pagina: '', indice: '', titulo: '', descripcion:'', precio: ''
  }



  constructor( private picthSer :PitchServicesService ) {}

  ngOnInit(): void {}

  handleImg(ev:any): void {
    this.picthSer.uploadImage(ev)
    this.uploadPercent = this.picthSer.task.percentageChanges();
    this.picthSer.task.snapshotChanges().pipe(
      finalize(() => {
        this.picthSer.fileRef.getDownloadURL().subscribe((urlImage: string) => {
          this.linnkImg = urlImage
        })
      })
    ).subscribe()
  }

  addArticulos(){
    const { pagina, indice, titulo, subtitulo, descripcion, precio } = this.articulo
    const newData = {
      indice,
      pagina,
      titulo,
      precio,
      subtitulo,
      link: this.linnkImg,
      descripcion
    }
    this.picthSer.postArticulo(newData).then(() => {
      this.clear()
    })
  }

  clear(){
    this.articulo = {pagina: '', indice: '', titulo: '', subtitulo : '', descripcion:'', precio:''}
    this.inputimg.nativeElement.value = ''
    this.linnkImg = '';
    this.uploadPercent = null
  }

  modEditar(){
   /*  this.articulo = this.picthSer.articulo
    console.log(this.articulo); */
  }
}
