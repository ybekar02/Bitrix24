package com.bitrix24.step_definitions;

import com.bitrix24.pages.NavigationMenuPage;
import com.bitrix24.utilities.Driver;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.Then;
import org.junit.Assert;


public class NavigationMenuStepDefinitions extends NavigationMenuPage {

//    @Then("user clicks on the {string}")
//    public void user_clicks_on_the(String string) {
//        Driver.getDriver().getTitle();
//    }
//
//    @Then("user verifies {string}")
//    public void user_verifies(String string) {
//        String actual = Driver.getDriver().getTitle();
//        Assert.assertEquals(string, actual);
//    }


    Pages pages = new Pages();

    @Then("user clicks on the {string} and verifies {string}")
    public void user_clicks_on_the_and_verifies(String string, String string2) {
        pages.navigationMenuPage().getNavigationTab(string);
        String actual = Driver.getDriver().getTitle();
        System.out.println(actual);
        Assert.assertEquals(actual, string2);
    }
}
