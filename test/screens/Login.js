
const expect = require('chai').expect;

const login = (user) => {
    // Selectors
    const getStarted = $('//android.widget.TextView[@text="Get Started"]');
    const tabEmail = $('//EMAIL');
    const inputEmail = $('//android.widget.EditText');
    const buttonNext = $('//android.widget.TextView[@text="Next"]');
    const inputPassword = $('//android.widget.EditText');
    const logIn = $('//android.widget.TextView[@text="Log in"]');

    // Actions
    getStarted.click();
    tabEmail.click();
    inputEmail.click();
    inputEmail.addValue(user.name);
    buttonNext.click();
    inputPassword.click();
    inputPassword.addValue(user.password);
    logIn.click();
}


module.exports = {
    login
}