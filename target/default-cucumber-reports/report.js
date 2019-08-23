$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/NavigationMenu.feature");
formatter.feature({
  "name": "Navigation Menu",
  "description": "  As a user, I should be able to see the correct titles when I navigate to corresponding modules.",
  "keyword": "Feature"
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
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the module then verifies the title",
  "rows": [
    {
      "cells": [
        "Activity Stream",
        "Portal"
      ]
    },
    {
      "cells": [
        "Tasks",
        "My tasks"
      ]
    },
    {
      "cells": [
        "Chat and Calls",
        "Chat and Calls"
      ]
    },
    {
      "cells": [
        "Workgroups",
        "Workgroups and projects"
      ]
    },
    {
      "cells": [
        "Drive",
        "My Drive"
      ]
    },
    {
      "cells": [
        "Calendar",
        "hr5@cybertekschool.com: Calendar"
      ]
    },
    {
      "cells": [
        "Mail",
        "Mailbox Integration"
      ]
    },
    {
      "cells": [
        "Contact Center",
        "Contact Center"
      ]
    },
    {
      "cells": [
        "Time and Reports",
        "Absence Chart"
      ]
    },
    {
      "cells": [
        "Employees",
        "Company Structure"
      ]
    },
    {
      "cells": [
        "Services",
        "Meeting Rooms"
      ]
    },
    {
      "cells": [
        "Company",
        "Company"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_module_then_verifies_the_title(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});