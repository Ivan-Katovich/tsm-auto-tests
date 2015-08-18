package e2e;

import cucumber.api.java.en.When;

public class Stepdefs2 {

    @When("^I open the carHireSearchGadget$")
    public void i_open_the_carHireSearchGadget() throws Throwable {
        System.out.println("I open the carHireSearchGadget");
    }

    @When("^I fill pickUpForm with value 'Manchester'$")
    public void i_fill_pickUpForm_with_value_Manchester() throws Throwable {
        System.out.println("I fill pickUpForm with value 'Manchester'");
    }

    @When("^I submit carHireSerchGadget$")
    public void i_submit_carHireSerchGadget() throws Throwable {
        System.out.println("I submit carHireSerchGadget");
    }


}
