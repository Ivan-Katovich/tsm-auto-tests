Feature: test
Description: test desc

@second
Scenario: test scenario
	Given I am on SuperHomePage
	Then the superHomePage Title has text 'Leave London behind'
	When I open the carHireSearchGadget
	When I fill pickUpForm with value 'Manchester'
	When I submit carHireSerchGadget