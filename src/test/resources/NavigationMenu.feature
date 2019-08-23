Feature: Navigation Menu
  As a user, I should be able to see the correct titles when I navigate to corresponding modules.

  Background:
    Given user is on the landing page
    Then user logs on under username "hr5@cybertekschool.com" and password "UserUser"


  Scenario Outline:

    And user clicks on the "<module>" and verifies "<title>"

    Examples:
      | module           | title                            |
      | Activity Stream  | Portal                           |
      | Tasks            | My tasks                         |
      | Chat and Calls   | Chat and Calls                   |
      | Workgroups       | Workgroups and project           |
      | Drive            | My Drive                         |
      | Calendar         | hr5@cybertekschool.com: Calendar |
      | Mail             | Mailbox Integration              |
      | Contact Center   | Contact Center                   |
      | Time and Reports | Absence Chart                    |
      | Employees        | Company Structure                |
      | Services         | Meeting Rooms                    |
      | Company          | Company                          |

  @wip
  Scenario:
    And user clicks on the module then verifies the title
      | Activity Stream  | Portal                           |
      | Tasks            | My tasks                         |
      | Chat and Calls   | Chat and Calls                   |
      | Workgroups       | Workgroups and projects           |
      | Drive            | My Drive                         |
      | Calendar         | hr5@cybertekschool.com: Calendar |
      | Mail             | Mailbox Integration              |
      | Contact Center   | Contact Center                   |
      | Time and Reports | Absence Chart                    |
      | Employees        | Company Structure                |
      | Services         | Meeting Rooms                    |
      | Company          | Company                          |

#      List<Map<String, String>>   ---> | Activity Stream  | Activity Stream  | | Tasks            | Tasks            |........
