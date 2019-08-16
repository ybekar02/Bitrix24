package com.bitrix24.pages;

import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.ConfigurationReader;
import com.bitrix24.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.swing.text.Utilities;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//input[@class='login-inp'])[1]")
    public WebElement usernameElement;

    @FindBy(css = "input[class='login-inp'][placeholder='Password']")
    public WebElement passwordElement;

    @FindBy(css = "input[value='Log In']")
    public WebElement loginButtonElement;

    public void login(String username, String password) {
        usernameElement.sendKeys(username);
        passwordElement.sendKeys(password);
        loginButtonElement.click();
    }

    public void login() {
        String username = ConfigurationReader.getProperty("hrusername");
        String password = ConfigurationReader.getProperty("hrpassword");
        usernameElement.sendKeys(username);
        passwordElement.sendKeys(password);
        loginButtonElement.click();
    }

    public void goToLandingPage() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

}
