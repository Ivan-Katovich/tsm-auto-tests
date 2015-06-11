$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("journeys/flightsJourney.feature");
formatter.feature({
  "id": "flights-journey",
  "description": "Description: This feature will check flights full journey",
  "name": "Flights journey",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2105991093,
  "status": "passed"
});
formatter.scenario({
  "id": "flights-journey;check-the-ability-to-find-results-with-flights-search-gadget",
  "tags": [
    {
      "name": "@first",
      "line": 4
    }
  ],
  "description": "",
  "name": "Check the ability to find results with Flights search gadget",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I am on SuperHomePage",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I click on the superHomePageElement \u0027flightsFormButton\u0027",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I fill superHomePage form by \u0027minimumFlightsProfile\u0027 profile",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "I click on the superHomePageElement \u0027flyingSearchButton\u0027",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I wait for page absolutely load",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I am taken to the FlightsResults page",
  "keyword": "Then ",
  "line": 12,
  "comments": [
    {
      "value": "#And I wait for all providers load",
      "line": 11
    }
  ]
});
formatter.match({
  "location": "SuperHomePageSteps.goToSuperHomePage()"
});
formatter.result({
  "duration": 7172342920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flightsFormButton",
      "offset": 37
    }
  ],
  "location": "SuperHomePageSteps.clickOnSuperHomePageElement(String)"
});
formatter.result({
  "duration": 296528132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "minimumFlightsProfile",
      "offset": 30
    }
  ],
  "location": "SuperHomePageSteps.fillSuperHomePageFormByProfile(String)"
});
formatter.result({
  "duration": 6602655390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flyingSearchButton",
      "offset": 37
    }
  ],
  "location": "SuperHomePageSteps.clickOnSuperHomePageElement(String)"
});
formatter.result({
  "duration": 223677244,
  "status": "passed"
});
formatter.match({
  "location": "PageSteps.waitForPageAbsolutelyLoad()"
});
formatter.result({
  "duration": 3982955843,
  "status": "passed"
});
formatter.match({
  "location": "FlightsResultsPageSteps.AssertOnFlightsResultsPage()"
});
formatter.result({
  "duration": 15047440,
  "status": "passed"
});
formatter.after({
  "duration": 2546343600,
  "status": "passed"
});
formatter.uri("superHomePage/checkSuperHomePageElements.feature");
formatter.feature({
  "id": "check-superhomepage-elements",
  "description": "Description: This feature will check super home page elements visibility",
  "name": "Check SuperHomePage elements",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2151653867,
  "status": "passed"
});
formatter.scenario({
  "id": "check-superhomepage-elements;check-logo,-main-menu,-main-title-and-sg-buttons",
  "tags": [
    {
      "name": "@first",
      "line": 4
    }
  ],
  "description": "",
  "name": "Check logo, main menu, main title and SG buttons",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I am on SuperHomePage",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "the superHomePage element \u0027mainLogo\u0027 is visible",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "the superHomePage element \u0027mainMenu\u0027 is visible",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "the superHomePage element \u0027mainTitle\u0027 has the text \u0027Leave London behind Where do you want to go today?\u0027",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "the superHomePage element \u0027holidaysFormButton\u0027 has the text \u0027Holidays\u0027",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "the superHomePage element \u0027flightsFormButton\u0027 has the text \u0027Flights\u0027",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "the superHomePage element \u0027carHireFormButton\u0027 has the text \u0027Car Hire\u0027",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "the superHomePage element \u0027hotelsFormButton\u0027 has the text \u0027Hotels\u0027",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "the superHomePage element \u0027insuranceFormButton\u0027 has the text \u0027Insurance\u0027",
  "keyword": "And ",
  "line": 14
});
formatter.match({
  "location": "SuperHomePageSteps.goToSuperHomePage()"
});
formatter.result({
  "duration": 8121861339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mainLogo",
      "offset": 27
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementIsVisibile(String)"
});
formatter.result({
  "duration": 149419801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mainMenu",
      "offset": 27
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementIsVisibile(String)"
});
formatter.result({
  "duration": 195408021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mainTitle",
      "offset": 27
    },
    {
      "val": "Leave London behind Where do you want to go today?",
      "offset": 52
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementHasTheText(String,String)"
});
formatter.result({
  "duration": 277953829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "holidaysFormButton",
      "offset": 27
    },
    {
      "val": "Holidays",
      "offset": 61
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementHasTheText(String,String)"
});
formatter.result({
  "duration": 181648247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flightsFormButton",
      "offset": 27
    },
    {
      "val": "Flights",
      "offset": 60
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementHasTheText(String,String)"
});
formatter.result({
  "duration": 214162367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carHireFormButton",
      "offset": 27
    },
    {
      "val": "Car Hire",
      "offset": 60
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementHasTheText(String,String)"
});
formatter.result({
  "duration": 266219854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hotelsFormButton",
      "offset": 27
    },
    {
      "val": "Hotels",
      "offset": 59
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementHasTheText(String,String)"
});
formatter.result({
  "duration": 249043979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "insuranceFormButton",
      "offset": 27
    },
    {
      "val": "Insurance",
      "offset": 62
    }
  ],
  "location": "SuperHomePageSteps.checkTheSuperHomePageElementHasTheText(String,String)"
});
formatter.result({
  "duration": 206726744,
  "status": "passed"
});
formatter.after({
  "duration": 2531133652,
  "status": "passed"
});
});