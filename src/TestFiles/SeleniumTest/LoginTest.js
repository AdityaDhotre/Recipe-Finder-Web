const { Builder, By, until } = require('selenium-webdriver'); // Load necessary modules from selenium-webdriver

// Asynchronous function to perform authentication test
async function authenticationTest() {
    // Create a new WebDriver instance for Chrome
    let webDriver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the login page
        await webDriver.get("http://localhost:3000/login");

        // Fill in the username and password fields
        await webDriver.findElement(By.id('username')).sendKeys('user');
        await webDriver.findElement(By.id('password')).sendKeys('pass');

        // Click the login button
        await webDriver.findElement(By.id('login-button')).click();

        // Wait until the URL changes to the expected page after successful login
        await webDriver.wait(until.urlIs('http://localhost:3000/recipe'), 5000);

        // Print a success message if the test passes
        console.log("Authentication test passed!!!");
    } catch (error) {
        // Print an error message if the test fails
        console.error("Authentication test failed", error);
    } finally {
        // Quit the WebDriver session regardless of the test result
        await webDriver.quit();
    }
}

// Call the authenticationTest function to execute the test
authenticationTest();
