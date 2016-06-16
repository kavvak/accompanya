import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AccompanyaAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AccompanyaAppComponent,  [ROUTER_PROVIDERS]);
