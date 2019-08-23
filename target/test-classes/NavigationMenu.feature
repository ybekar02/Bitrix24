Feature: Navigation Menu
  As a user, I should be able to see the correct titles when I navigate to corresponding modules.

  Background:
    Given user is on the landing page
    Then user logs on under username "hr5@cybertekschool.com" and password "UserUser"

  @wip
  Scenario Outline:

    And user clicks on the "<module>" and verifies "<title>"

    Examples:
      | module           | title            |
      | Activity Stream  | Activity Stream  |
      | Tasks            | Tasks            |
      | Chat and Calls   | Chat and Calls   |
      | Workgroups       | Workgroups       |
      | Drive            | Drive            |
      | Calendar         | Calendar         |
      | Mail             | Mail             |
      | Contact Center   | Contact Center   |
      | Time and Reports | Time and Reports |
      | Employees        | Employees        |
      | Services         | Services         |
      | Company          | Company          |
