class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.getByText("Add to Cart").click();
  }

  async viewCart() {
    await this.page.getByRole("link", { name: "View Cart" }).click();
  }
}

module.exports = ProductPage;
