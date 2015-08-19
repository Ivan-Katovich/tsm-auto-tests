Feature: AEM CMS login
  As an administrator of AEM CMS
  I should be able to have access to aem cms
  So I can login on siteadmin with valid credentials


@second
Scenario: AEM CMS login with valid credentials
	Given I open siteadmin
  	When I login with valid credentials
	Then I should be logged as Administrator