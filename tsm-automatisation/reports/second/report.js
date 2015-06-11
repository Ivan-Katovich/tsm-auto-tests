$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("journeys/carHireJourney.feature");
formatter.feature({
  "id": "car-hire-journey-journey",
  "description": "Description: This feature will check Car hire full journey",
  "name": "Car hire journey journey",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 3125887276,
  "status": "passed"
});
formatter.scenario({
  "id": "car-hire-journey-journey;check-the-ability-to-find-results-with-car-hire-search-gadget",
  "tags": [
    {
      "name": "@second",
      "line": 4
    }
  ],
  "description": "",
  "name": "Check the ability to find results with Car hire search gadget",
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
  "name": "I click on the superHomePageElement \u0027carHireFormButton\u0027",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I fill superHomePage form by \u0027minimumCarHireProfile\u0027 profile",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "I click on the superHomePageElement \u0027carHireSearchButton\u0027",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I wait for page absolutely load",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I wait for all providers load",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I am taken to the CarHireResults page",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on the \u00271\u0027st element of \u0027viewDealButtons\u0027 group",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I switch to another handle",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I am taken to the page contains URL \u0027http://www.sit1.gb.travelsupermarket.com/beta/en-gb/interstitial\u0027",
  "keyword": "Then ",
  "line": 16,
  "comments": [
    {
      "value": "#\tAnd I wait for page absolutely load",
      "line": 15
    }
  ]
});
formatter.step({
  "name": "I am automaticaly redirected",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "I am taken to the page contains URL \u0027www.arguscarhire.com/\u0027",
  "keyword": "Then ",
  "line": 19,
  "comments": [
    {
      "value": "#\tAnd I wait for page absolutely load",
      "line": 18
    }
  ]
});
formatter.match({
  "location": "SuperHomePageSteps.goToSuperHomePage()"
});
formatter.result({
  "duration": 7714456593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carHireFormButton",
      "offset": 37
    }
  ],
  "location": "SuperHomePageSteps.clickOnSuperHomePageElement(String)"
});
formatter.result({
  "duration": 271901239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "minimumCarHireProfile",
      "offset": 30
    }
  ],
  "location": "SuperHomePageSteps.fillSuperHomePageFormByProfile(String)"
});
formatter.result({
  "duration": 4079545814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carHireSearchButton",
      "offset": 37
    }
  ],
  "location": "SuperHomePageSteps.clickOnSuperHomePageElement(String)"
});
formatter.result({
  "duration": 182874759,
  "status": "passed"
});
formatter.match({
  "location": "PageSteps.waitForPageAbsolutelyLoad()"
});
formatter.result({
  "duration": 3398956866,
  "status": "passed"
});
formatter.match({
  "location": "ChannelPageSteps.waitForProviders()"
});
formatter.result({
  "duration": 12282959521,
  "status": "passed"
});
formatter.match({
  "location": "CarHireResultsPageSteps.assertOnCarHirePage()"
});
formatter.result({
  "duration": 18078224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "viewDealButtons",
      "offset": 33
    }
  ],
  "location": "CarHireResultsPageSteps.clickOnCarHireResultsMultiElement(String,String)"
});
formatter.result({
  "duration": 3475391069,
  "status": "passed"
});
formatter.match({
  "location": "PageSteps.switchHandle()"
});
formatter.result({
  "duration": 41928070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.sit1.gb.travelsupermarket.com/beta/en-gb/interstitial",
      "offset": 37
    }
  ],
  "location": "PageSteps.assertOnPageWithURL(String)"
});
formatter.result({
  "duration": 42813742,
  "status": "passed"
});
formatter.match({
  "location": "PageSteps.waitForRedirect()"
});
formatter.result({
  "duration": 18703802872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.arguscarhire.com/",
      "offset": 37
    }
  ],
  "location": "PageSteps.assertOnPageWithURL(String)"
});
formatter.result({
  "duration": 12942098,
  "status": "passed"
});
formatter.after({
  "duration": 1365701623,
  "status": "passed"
});
});