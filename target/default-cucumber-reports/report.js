$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/NavigationMenu.feature");
formatter.feature({
  "name": "Navigation Menu",
  "description": "  As a user, I should be able to see the correct titles when I navigate to corresponding modules.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"\u003cmodule\u003e\" and verifies \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "Activity Stream",
        "Activity Stream"
      ]
    },
    {
      "cells": [
        "Tasks",
        "Tasks"
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
        "Workgroups"
      ]
    },
    {
      "cells": [
        "Drive",
        "Drive"
      ]
    },
    {
      "cells": [
        "Calendar",
        "Calendar"
      ]
    },
    {
      "cells": [
        "Mail",
        "Mail"
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
        "Time and Reports"
      ]
    },
    {
      "cells": [
        "Employees",
        "Employees"
      ]
    },
    {
      "cells": [
        "Services",
        "Services"
      ]
    },
    {
      "cells": [
        "Company",
        "Company"
      ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Activity Stream\" and verifies \"Activity Stream\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Portal]\u003e but was:\u003c[Activity Stream]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Activity Stream\" and verifies \"Activity Stream\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Tasks\" and verifies \"Tasks\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[My t]asks\u003e but was:\u003c[T]asks\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Tasks\" and verifies \"Tasks\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Chat and Calls\" and verifies \"Chat and Calls\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Workgroups\" and verifies \"Workgroups\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWorkgroups[ and projects]\u003e but was:\u003cWorkgroups[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Workgroups\" and verifies \"Workgroups\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Drive\" and verifies \"Drive\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[My ]Drive\u003e but was:\u003c[]Drive\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Drive\" and verifies \"Drive\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Calendar\" and verifies \"Calendar\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[hr5@cybertekschool.com: ]Calendar\u003e but was:\u003c[]Calendar\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Calendar\" and verifies \"Calendar\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Mail\" and verifies \"Mail\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cMail[box Integration]\u003e but was:\u003cMail[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Mail\" and verifies \"Mail\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Contact Center\" and verifies \"Contact Center\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Time and Reports\" and verifies \"Time and Reports\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Authorization]\u003e but was:\u003c[Time and Reports]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Time and Reports\" and verifies \"Time and Reports\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Employees\" and verifies \"Employees\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Company Structure]\u003e but was:\u003c[Employees]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Employees\" and verifies \"Employees\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Services\" and verifies \"Services\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Meeting Room]s\u003e but was:\u003c[Service]s\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.bitrix24.step_definitions.NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(NavigationMenuStepDefinitions.java:31)\n\tat ✽.user clicks on the \"Services\" and verifies \"Services\"(src/test/resources/NavigationMenu.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "status": "passed"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Company\" and verifies \"Company\"",
  "keyword": "And "
});
formatter.match({
  "location": "NavigationMenuStepDefinitions.user_clicks_on_the_and_verifies(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});