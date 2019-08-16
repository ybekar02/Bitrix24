package com.bitrix24.step_definitions;

import com.bitrix24.utilities.BrowserUtils;
import com.bitrix24.utilities.ConfigurationReader;
import com.bitrix24.utilities.Driver;
import com.bitrix24.utilities.Pages;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class TasksPagesStepDefinitions {

    Pages pages = new Pages();

    @Given("user is on the landing page")
    public void user_is_on_the_landing_page() {
        pages.loginPage().goToLandingPage();
    }

    @Then("user logs on under username {string} and password {string}")
    public void user_logs_on_under_username_and_password(String string, String string2) {
        pages.loginPage().login(string, string2);
    }

    @Then("user can create new task by clicking on tasks on activity stream")
    public void user_can_create_new_task_by_clicking_on_tasks_on_activity_stream() {
        String body = "This is the first post as the task";
        pages.tasksPage().taskElement.click();
        pages.tasksPage().thingsToDoElement.sendKeys("Everything will be OK!");
        BrowserUtils.waitPlease(1);
        Driver.getDriver().switchTo().frame(pages.tasksPage().iframeElement);
        BrowserUtils.waitPlease(1);
        pages.tasksPage().bodyElement.sendKeys(body);
        Driver.getDriver().switchTo().parentFrame();

    }

    @Then("user can upload a file and image or link or checklist regarding to new task")
    public void user_can_upload_a_file_and_image_or_link_or_checklist_regarding_to_new_task() {
        String path = "/Users/yasinbekar/Downloads/VYTRACK PART II.pdf";
        String text = "Must listen to this song!!!";
        String link = "https://www.youtube.com/watch?v=jNf-8c6jqyM";
        pages.tasksPage().fileUploadElement.click();
        BrowserUtils.waitPlease(1);
        pages.tasksPage().uploadFileElement.sendKeys(path);
        BrowserUtils.waitPlease(1);
        pages.tasksPage().linkElement.click();
        BrowserUtils.waitPlease(1);
        pages.tasksPage().linkTextElement.sendKeys(text);
        BrowserUtils.waitPlease(1);
        pages.tasksPage().linkUrlElement.sendKeys(link);
        BrowserUtils.waitPlease(1);
        pages.tasksPage().saveElement.click();
        BrowserUtils.waitPlease(1);


    }

    @Then("user should be able to set up a deadline for new task")
    public void user_should_be_able_to_set_up_a_deadline_for_new_task() {
        pages.tasksPage().pickDateElement.click();
        BrowserUtils.waitPlease(1);
        pages.tasksPage().selectDateElement.click();

    }

    @Then("user submits the task")
    public void user_submits_the_task() {
        BrowserUtils.waitPlease(1);
        pages.tasksPage().saveButtonElement.click();
        BrowserUtils.waitPlease(5);
    }


}

/*

Hello,
        I have a question. I can not have the
        system logon since it throws NullpPointerException.
        All locator are correct, what is the wrong part here?

        --> feature file
        Then user logs on under username "hr5@cybertekschool.com" and password "UserUser"

        ---> step_def
          @Then("user logs on under username {string} and password {string}")
          public void user_logs_on_under_username_and_password(String string, String string2) {
          pages.loginPage().login(string, string2);

          ---> Login method in login page
           public void login(String username, String password) {
           usernameElement.sendKeys(username);
           passwordElement.sendKeys(password);
           loginButtonElement.click();
    }
    }
 */