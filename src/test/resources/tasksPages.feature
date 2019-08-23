@Tasks
Feature: Tasks Stream
  As a user I should be able to create a task from activity stream

  Background:
    Given user is on the landing page

  Scenario:
    Then user logs on under username "hr5@cybertekschool.com" and password "UserUser"
    Then user can create new task by clicking on tasks on activity stream
    And user can upload a file and image or link or checklist regarding to new task
    Then user should be able to set up a deadline for new task
    And user submits the task


  Scenario: User completes the web page via Data Table
    Then user logs on under username "hr5@cybertekschool.com" and password "UserUser"
    Then user can create new task by clicking on tasks
      | thingsToDo  | Everything will be OK!             |
      | bodyElement | This is the first post as the task |
    And user can upload a file and image or link or checklist
      | uploadFileElement                               | linkTextElement             | linkUrlElement                              |
      | /Users/yasinbekar/Downloads/VYTRACK PART II.pdf | Must listen to this song!!! | https://www.youtube.com/watch?v=jNf-8c6jqyM |
    Then user should be able to set up a deadline for new task
    And user submits the task