import { Component } from '@angular/core';
import { CardInformationComponent } from './card-information/index';

@Component({
  moduleId: module.id,
  selector: 'booking-steps',
  templateUrl: 'booking-steps.component.html',
//  styleUrls: ['booking-steps.component.sass']
  directives: [CardInformationComponent]
})
export class BookingStepsComponent {
  constructor() {}
}
