import { Component } from '@angular/core';
import { BookingStepsComponent } from './booking-steps/index';

@Component({
  moduleId: module.id,
  selector: 'booking',
  templateUrl: 'booking.component.html',
//  styleUrls: ['booking.component.sass']
  directives: [BookingStepsComponent]
})
export class BookingComponent {
  constructor() {}
}
