import { Injectable } from '@nestjs/common';
import { CreateChargeDto } from '@app/common';
import { StripePaymentProcessor } from './libs/payment-processors/StripePaymentProcessor';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentProcessor: StripePaymentProcessor) {}

  async makeCharge({ amount }: CreateChargeDto) {
    this.paymentProcessor.processPayment(amount);
  }
}
