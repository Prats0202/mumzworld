const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const ProductPage = require("../pages/ProductPage");
const CartPage = require("../pages/CartPage");
const RegistrationPage = require("../pages/RegistrationPage");
const CheckoutPage = require("../pages/CheckoutPage");

test("Purchase product and register new user", async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const registrationPage = new RegistrationPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Navigate to the website
  await homePage.navigate();

  // Step 2: Click on a product image and close the popup
  await homePage.clickProductImage();
  await homePage.closePopup();

  // Step 3: Select a product
  await homePage.selectProduct(
    "Little Story - 3-in-1 Swing With Slide - Green"
  );

  // Step 4: Add the product to the cart and view the cart
  await productPage.addToCart();
  await productPage.viewCart();

  // Step 5: Increase the quantity of the product
  await cartPage.increaseQuantity(4);

  // Step 6: Proceed to checkout
  await cartPage.proceedToCheckout();

  // Step 7: Register a new user
  await registrationPage.navigateToRegistration();
  await registrationPage.fillRegistrationForm(
    "Pratik",
    "Patil",
    "patilpratikp004@gmail.com",
    "Pr@tik2020"
  );
  await registrationPage.submitRegistrationForm();

  // Step 8: Navigate to the checkout page
  await checkoutPage.navigateToCheckout();
});
