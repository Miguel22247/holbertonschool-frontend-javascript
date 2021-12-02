import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
      this._currency = currency;
      this._amount = amount;
  }

  // getter
  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  // setter
  set currency(Currency) {
    this._currency = Currency;
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  displayFUllPrice() {
    return `${this._amount} ${this.currency.displayFUllCurrency()}`;
  }
}