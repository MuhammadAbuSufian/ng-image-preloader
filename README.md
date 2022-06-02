# NgImagePreloader

It preloads images during application loading.

#### Installation

```bash
npm install ng-image-preloader
```

##### Example Usage

```javascript
import { ImagePreloaderModule } from 'ng-image-preloader';

imports: [
  ImagePreloaderModule.forRoot([
    'icon-calendar.png',
    'icon-time.png'
  ])
]
```
