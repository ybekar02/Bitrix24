package com.bitrix24.utilities;

import com.bitrix24.pages.LoginPage;
import com.bitrix24.pages.TasksPage;


public class Pages {

    private LoginPage loginPage;
    private TasksPage tasksPage;

    public LoginPage loginPage() {
        if (loginPage == null) {
            loginPage = new LoginPage();
        }
        return loginPage;
    }

    public TasksPage tasksPage() {
        if (tasksPage == null) {
            tasksPage = new TasksPage();
        }
        return tasksPage;
    }
}
