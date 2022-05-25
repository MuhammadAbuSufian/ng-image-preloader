import {Inject, Injectable} from "@angular/core";

@Injectable()
export class ImagePreloaderService {

  constructor(@Inject('config') private urls: string[]) {
    this.loadImages(urls);
  }

  private loadImages(urls: string[]){
    let container = document.createElement("div");
    container.id = 'preload-image-holder';
    urls.forEach((url: string) => {
      let image = new Image();
      image.src = url;
      image.style.cssText = 'display: none';
      container.appendChild(image);
    })
    document.getElementsByTagName('body')[0].appendChild(container);
    // @ts-ignore
    document.getElementById('preload-image-holder').remove();
  }
}
