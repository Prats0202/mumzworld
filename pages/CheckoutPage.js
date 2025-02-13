class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToCheckout() {
    await this.page.goto("https://www.mumzworld.com/en/checkout");
  }
}

module.exports = CheckoutPage;
