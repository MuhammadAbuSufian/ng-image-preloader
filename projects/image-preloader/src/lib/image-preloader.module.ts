import {Injector, ModuleWithProviders, NgModule} from '@angular/core';
import {ImagePreloaderService} from "./image-preloader.service";



@NgModule({
  providers: [
    ImagePreloaderService
  ]
})
export class ImagePreloaderModule {
  constructor(private injector:Injector) {
    injector.get(ImagePreloaderService);
  }

  static forRoot(config: string[]): ModuleWithProviders<ImagePreloaderModule> {
    return {
      ngModule: ImagePreloaderModule,
      providers: [ImagePreloaderService, {provide: 'config', useValue: config}]
    };
  }
}
