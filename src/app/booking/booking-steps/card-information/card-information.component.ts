import { Component } from '@angular/core';
declare var Stripe: any;

@Component({
  moduleId: module.id,
  selector: 'card-information',
  templateUrl: 'card-information.component.html'
  // styleUrls: ['card-information.component.sass']
})
export class CardInformationComponent {
  cardNo: string = '4242424242424242';
  expiryMonth: number;
  expiryYear: number;
  cvv: number;

  constructor() {}

  createToken() {
    Stripe.card.createToken({
      number: this.cardNo,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvv
    }, function(status, response) {
      console.log(response);
    });
  }
}
