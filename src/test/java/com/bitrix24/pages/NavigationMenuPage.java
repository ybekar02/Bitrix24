package com.bitrix24.pages;

import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class NavigationMenuPage {

    public NavigationMenuPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    public void getNavigationTab(String tabName) {

        if(tabName.equals("Chats and Calls")){
            Driver.getDriver().findElement(By.partialLinkText(tabName)).click();
            //BrowserUtils.waitFor(3);
            //Driver.getDriver().findElement(By.xpath("(//*[text()='Close'])")).click();
            //BrowserUtils.waitFor(3);
        }else{
            Driver.getDriver().findElement(By.partialLinkText(tabName)).click();
        }
    }
}