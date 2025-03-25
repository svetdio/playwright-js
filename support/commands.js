import locators from '../support/locators.js';

export async function login(page) {
    await page.goto('/');
    
    const username = 'superadmin'
    const password = 'admin'
    const welcomeMessage = `Welcome, ${username}!`

    await page.fill(locators.login.user, username);
    await page.fill(locators.login.pass, password);
    await page.click(locators.login.submit);

    // await page.locator(locators.login.welcome).isVisible(`Welcome, ${username}!`);
    await page.isVisible(locators.login.welcome, welcomeMessage)

}