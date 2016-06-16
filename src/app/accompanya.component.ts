import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { BookingComponent } from './booking/index';
declare var Stripe: any;

@Component({
  moduleId: module.id,
  selector: 'accompanya-app',
  templateUrl: 'accompanya.component.html',
  styleUrls: ['accompanya.component.css'],
  directives: [BookingComponent]
})
export class AccompanyaAppComponent {
  title = 'accompanya works!';
  constructor() {}
}
