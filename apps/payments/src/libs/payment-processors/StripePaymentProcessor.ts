import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PaymentProcessor } from './PaymentProcessor';

@Injectable()
export class StripePaymentProcessor extends PaymentProcessor {
  private readonly stripe = new Stripe(
    this.configService.get('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2024-06-20',
    },
  );
  constructor(private readonly configService: ConfigService) {
    super();
  }

  async processPayment(amount: number) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: amount * 100,
      confirm: true,
      currency: 'usd',
      payment_method: 'pm_card_visa',
      payment_method_types: ['card'],
    });
    return paymentIntent;
  }
}
