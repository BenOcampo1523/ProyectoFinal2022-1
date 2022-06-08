import { enableProdMode } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CustomMatPaginatorIntl } from './customCode/CustomMatPaginatorIntl';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
