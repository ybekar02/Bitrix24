$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/tasksPages.feature");
formatter.feature({
  "name": "Tasks Stream",
  "description": "  As a user I should be able to create a task from activity stream",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Tasks"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TasksPagesStepDefinitions.user_is_on_the_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Tasks"
    }
  ]
});
formatter.step({
  "name": "user logs on under username \"hr5@cybertekschool.com\" and password \"UserUser\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksPagesStepDefinitions.user_logs_on_under_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can create new task by clicking on tasks on activity stream",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksPagesStepDefinitions.user_can_create_new_task_by_clicking_on_tasks_on_activity_stream()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can upload a file and image or link or checklist regarding to new task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksPagesStepDefinitions.user_can_upload_a_file_and_image_or_link_or_checklist_regarding_to_new_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to set up a deadline for new task",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksPagesStepDefinitions.user_should_be_able_to_set_up_a_deadline_for_new_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submits the task",
  "keyword": "And "
});
formatter.match({
  "location": "TasksPagesStepDefinitions.user_submits_the_task()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});