class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.mumzworld.com/en");
  }

  async clickProductImage() {
    await this.page
      .getByRole("link", { name: "MF-LP-5-EN-INDOORPLAY.jpg" })
      .click();
  }

  async closePopup() {
    await this.page.locator("#close").getByRole("img").click();
  }

  async selectProduct(productName) {
    await this.page.getByRole("link", { name: productName }).nth(2).click();
  }
}

module.exports = HomePage;
