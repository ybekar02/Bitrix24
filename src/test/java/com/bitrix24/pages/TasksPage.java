package com.bitrix24.pages;

import com.bitrix24.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.security.PublicKey;

public class TasksPage {
    public TasksPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "feed-add-post-form-tab-tasks")
    public WebElement taskElement;

    @FindBy(xpath = "(//input[@placeholder='Things to do'])[1]")
    public WebElement thingsToDoElement;

    @FindBy(xpath = "//body[@contenteditable='true'][contains(@style,'min-height')]")
    public WebElement bodyElement;

    @FindBy(xpath = "(//input[@type='file'])[5]")
    public WebElement uploadFileElement;

    @FindBy(id = "bx-b-uploadfile-task-form-lifefeed_task_form")
    public WebElement fileUploadElement;

    @FindBy(xpath = "(//span[@title='Link'])[2]")
    public WebElement linkElement;

    @FindBy(xpath = "(//input[@id='linklifefeed_task_form-text'])[1]")
    public WebElement linkTextElement;

    @FindBy(xpath = "//input[@id='linklifefeed_task_form-href']")
    public WebElement linkUrlElement;

    @FindBy(css = "input[id='undefined']")
    public WebElement saveElement;

    @FindBy(xpath = "(//input[@class='task-options-inp'])[1]")
    public WebElement pickDateElement;

    @FindBy(xpath = "(//*[text()='28'])[3]")
    public WebElement selectDateElement;

    @FindBy(xpath = "(//button[@id='blog-submit-button-save'])[1]")
    public WebElement saveButtonElement;

    @FindBy(xpath = "(//iframe[@class='bx-editor-iframe'])[2]")
    public WebElement iframeElement;



}
