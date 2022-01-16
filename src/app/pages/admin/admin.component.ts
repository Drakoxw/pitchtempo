import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoginSService } from '../login/login-s.service';
import { PitchServicesService }  from '../../shared/services/pitch-services.service';
import { NoSeoService } from '../../shared/services/no-seo.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('inputimg')
  inputimg!: ElementRef;

  public modalClass:string = "bg"
  passp = 'admin';
  mod = '';
  opciones = "";

  public uploadPercent!:any //Observable<any>;
  public uploadPercent1!:any
  public uploadPercent2!:any
  public uploadPercent3!:any
  public uploadPercent4!:any
  public uploadPercent5!:any
  public downloadURL!: Observable<string>;
  linnkImg!:string;
  articulos!:any;
  articulo = {
    subtitulo : '', pagina: '', indice: '', titulo: '', descripcion:'', precio: '', tipo: '',color:'',
    mas:{
      masOpc: '',
      linkImg1: '',
      desc1: '',
      linkImg2: '',
      desc2: '',
      linkImg3: '',
      desc3: '',
      linkImg4: '',
      desc4: '',
      linkImg5: '',
      desc5: '',
    }
  }



  constructor(
    private picthSer :PitchServicesService,
    private loginSer:LoginSService,
    private noseo:NoSeoService
  ) {}

  ngOnInit(): void {
    this.noseo.generarNoSeo();
    this.loginSer.check();
  }

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

  handleImg1(ev:any): void {
    this.picthSer.uploadImage(ev)
    this.uploadPercent = this.picthSer.task.percentageChanges();
    this.picthSer.task.snapshotChanges().pipe(
      finalize(() => {
        this.picthSer.fileRef.getDownloadURL().subscribe((urlImage: string) => {
          this.articulo.mas.linkImg1 = urlImage
        })
      })
    ).subscribe()
  }

  handleImg2(ev:any): void {
    this.picthSer.uploadImage(ev)
    this.uploadPercent = this.picthSer.task.percentageChanges();
    this.picthSer.task.snapshotChanges().pipe(
      finalize(() => {
        this.picthSer.fileRef.getDownloadURL().subscribe((urlImage: string) => {
          this.articulo.mas.linkImg2 = urlImage
        })
      })
    ).subscribe()
  }

  handleImg3(ev:any): void {
    this.picthSer.uploadImage(ev)
    this.uploadPercent = this.picthSer.task.percentageChanges();
    this.picthSer.task.snapshotChanges().pipe(
      finalize(() => {
        this.picthSer.fileRef.getDownloadURL().subscribe((urlImage: string) => {
          this.articulo.mas.linkImg3 = urlImage
        })
      })
    ).subscribe()
  }

  handleImg4(ev:any): void {
    this.picthSer.uploadImage(ev)
    this.uploadPercent = this.picthSer.task.percentageChanges();
    this.picthSer.task.snapshotChanges().pipe(
      finalize(() => {
        this.picthSer.fileRef.getDownloadURL().subscribe((urlImage: string) => {
          this.articulo.mas.linkImg4 = urlImage
        })
      })
    ).subscribe()
  }

  handleImg5(ev:any): void {
    this.picthSer.uploadImage(ev)
    this.uploadPercent = this.picthSer.task.percentageChanges();
    this.picthSer.task.snapshotChanges().pipe(
      finalize(() => {
        this.picthSer.fileRef.getDownloadURL().subscribe((urlImage: string) => {
          this.articulo.mas.linkImg5 = urlImage
        })
      })
    ).subscribe()
  }


  addArticulos(){
    const { pagina, indice, titulo, subtitulo, descripcion, precio, tipo,color, mas } = this.articulo
    const newData = {
      indice,
      pagina,
      titulo,
      tipo,
      precio,
      subtitulo,
      link: this.linnkImg,
      descripcion,
      color,
      mas
    }
    this.picthSer.postArticulo(newData).then(() => {
      this.clear()
    })
  }

  clear(){
    this.articulo = {pagina: '', indice: '', titulo: '', subtitulo : '', descripcion:'', precio:'', tipo:'',color:'',
    mas:{
      masOpc: '',
      linkImg1:'',
      desc1:'',
      linkImg2:'',
      desc2:'',
      linkImg3:'',
      desc3:'',
      linkImg4:'',
      desc4:'',
      linkImg5:'',
      desc5:'',
    }}
    this.inputimg.nativeElement.value = ''
    this.linnkImg = '';
    this.uploadPercent = null
  }

  modEditar(){
   /*  this.articulo = this.picthSer.articulo
    console.log(this.articulo); */
  }
  cerrarSec(){
    this.loginSer.logout()
  }
}
