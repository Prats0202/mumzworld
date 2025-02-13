class RegistrationPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToRegistration() {
    await this.page.getByRole("link", { name: "Create Account" }).click();
  }

  async fillRegistrationForm(firstName, lastName, email, password) {
    await this.page.getByRole("textbox", { name: "First name" }).click();
    await this.page
      .getByRole("textbox", { name: "First name" })
      .fill(firstName);
    await this.page.getByRole("textbox", { name: "First name" }).press("Tab");
    await this.page.getByRole("textbox", { name: "Last name" }).fill(lastName);
    await this.page.getByRole("textbox", { name: "Last name" }).press("Tab");
    await this.page.getByRole("textbox", { name: "Email" }).fill(email);
    await this.page.getByRole("textbox", { name: "Password" }).click();
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
  }

  async submitRegistrationForm() {
    await this.page.getByRole("button", { name: "Create Account" }).click();
  }
}

module.exports = RegistrationPage;
