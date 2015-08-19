Feature: test
Description: test desc

@second
Scenario: test scenario
	Given I open siteadmin
  	When I login with valid credentials
	Then I should be logged as Administrator