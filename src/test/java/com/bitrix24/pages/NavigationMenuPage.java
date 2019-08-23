package com.bitrix24.pages;

import com.bitrix24.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class NavigationMenuPage {

    public NavigationMenuPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    public void getNavigationTab(String tabName) {

        String text = "";
        switch (tabName) {
            case "Activity Stream":
                text = "Activity Stream";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Tasks":
                text = "Tasks";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Chat and Calls":
                text = "Chat and Calls";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Workgroups":
                text = "Workgroups";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Drive":
                text = "Drive";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Calendar":
                text = "Calendar";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Mail":
                text = "Mail";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Contact Center":
                text = "Contact Center";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Time and Reports":
                text = "Time and Reports";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Employees":
                text = "Employees";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Services":
                text = "Services";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            case "Company":
                text = "Company";
                Driver.getDriver().findElement(By.partialLinkText(text)).click();
                break;
            default:
                System.out.println("Pick the correct locator!");
                break;
        }
        //return text;
    }
}