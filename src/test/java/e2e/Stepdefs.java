package e2e;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import e2e.pages.Admin;

import static org.junit.Assert.*;

public class Stepdefs {

    @Given("^I open siteadmin$")
    public void step1() throws Throwable {
        Browser.Open(Config.ciSiteAdminUrl);
    }

    @When("^I login with valid credentials$")
    public void step2() throws Throwable {
        Admin.loginPage.login(Config.siteAdminlogin, Config.siteAdminPassword);
    }

    @Then("^I should be logged as (.*)$")
    public void step3(String text) throws Throwable {;
        String admin = Admin.siteAdminPage.getUserName();
        admin = admin.replaceAll("\\s+", "");
        assertTrue(text.equals(admin));

    }

}
