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
      description: "Mantenimiento, reparación y personalización de consolas y equipos DJ",
      image: "../../assets/icno.png",
      slug: "",
      keywords: "",
      ...confi
    }

    this.meta.updateTag({ name: 'keywords', content: confi.keywords });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@dragon.xw' });
    this.meta.updateTag({ name: 'twitter:title', content: confi.title });
    this.meta.updateTag({ name: 'twitter:description', content: confi.description });
    this.meta.updateTag({ name: 'twitter:image', content: confi.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Picth Tempo Reparaciones' });
    this.meta.updateTag({ property: 'og:title', content: confi.title });
    this.meta.updateTag({ property: 'og:description', content: confi.description });
    this.meta.updateTag({ property: 'og:image', content: confi.image });
    this.meta.updateTag({ property: 'og:url', content: `https://picthtempo.com/${confi.slug​}` });
  }
}
