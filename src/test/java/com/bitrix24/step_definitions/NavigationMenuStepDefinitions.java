package com.bitrix24.step_definitions;

import com.bitrix24.pages.NavigationMenuPage;
import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.Driver;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.Map;


public class NavigationMenuStepDefinitions {

    Pages pages = new Pages();

    @Then("user clicks on the {string} and verifies {string}")
    public void user_clicks_on_the_and_verifies(String string, String string2) {
        pages.navigationMenuPage().getNavigationTab(string);
        String actual = Driver.getDriver().getTitle();
        System.out.println(actual);
        Assert.assertEquals(actual, string2);
    }

    @Then("user clicks on the module then verifies the title")
    public void user_clicks_on_the_module_then_verifies_the_title(Map<String, String> map) {
        String actual;
        for(String key : map.keySet()){
            pages.navigationMenuPage().getNavigationTab(key);
            BrowserUtils.waitFor(3);
            actual = Driver.getDriver().getTitle();
            Assert.assertEquals(map.get(key), actual);
            if(actual.equalsIgnoreCase("Chat and Calls"))
            Driver.getDriver().findElement(By.xpath("(//*[text()='Close'])")).click();
        }
    }
}
