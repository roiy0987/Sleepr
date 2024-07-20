export abstract class PaymentProcessor {
  protected paymentProcessor: any;
  abstract processPayment(amount: number): Promise<any>;
}
