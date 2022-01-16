import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class NoSeoService {

  constructor(private meta:Meta) { }


  generarNoSeo(){

    this.meta.updateTag({ name: 'robots', content: "noindex" });
    this.meta.updateTag({ name: 'googlebot', content: "noindex" });
    this.meta.updateTag({ name: 'googlebot-news', content: "nosnippet" });

  }

}
