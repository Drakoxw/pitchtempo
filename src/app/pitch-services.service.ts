import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PitchServicesService {

  fileRef:any;
  task:any;
  idC!:string;
  articulo:any;

  constructor(
    private storage: AngularFireStorage,
    private firestore:AngularFirestore
  ) { }

  getArticulo(id:string){
    return this.firestore.collection('articulos').doc(id).snapshotChanges();
  }

  getArticulos(){
    return this.firestore.collection('articulos').snapshotChanges();
  }

  postArticulo(data:any){
    return this.firestore.collection('articulos').add(data);
  }

  deleteArticulo(id:string){
    return this.firestore.collection('articulos').doc(id).delete();
  }

  putArticulo(id:string, data:any){
    return this.firestore.collection('articulos').doc(id).set(data);
  }

  //////////////////////////////////--------------------------------------////////////////////////////////////////

  uploadImage(ev:any){
    const file = ev.target.files[0];
    const filePath = file.name;
    this.fileRef = this.storage.ref(filePath);
    this.task = this.storage.upload(filePath, file);
  }

  handleId(id:string){
    this.idC = id
  }
}
