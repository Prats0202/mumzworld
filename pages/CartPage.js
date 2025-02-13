class CartPage {
  constructor(page) {
    this.page = page;
  }

  async increaseQuantity(times) {
    for (let i = 0; i < times; i++) {
      await this.page
        .getByRole("button", { name: "Increase Quantity" })
        .click();
    }
  }

  async proceedToCheckout() {
    await this.page
      .getByRole("button", { name: "Proceed to Checkout" })
      .click();
  }
}

module.exports = CartPage;
