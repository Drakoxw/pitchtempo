import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta:Meta) { }

  generarMeta(confi: any){
    confi = {
      tittle: "Picth tempo",
      description: "mantenimiento, reparación y personalización de consolas y equipos DJ",
      image: "../../assets/icno.png",
      slug: "picth-tempo.web.app",
      ...confi
    }
  }
}
