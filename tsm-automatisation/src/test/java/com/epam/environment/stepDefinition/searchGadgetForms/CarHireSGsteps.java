package com.epam.environment.stepDefinition.searchGadgetForms;

import com.epam.environment.pageObjects.PageFactory;
import com.epam.environment.pageObjects.searchGadgetForms.CarHireSearchGadget;

import cucumber.api.java.en.When;

public class CarHireSGsteps {
	
	private static CarHireSearchGadget carHireSearchGadget = PageFactory.getCarHireSearchGadget();
	
	public CarHireSGsteps(){}
        
        //test
	
	@When("^I fill pickUpForm with value '(.+)'$")
	public void fillPickUpForm(String value) {
		carHireSearchGadget.fillPickUpFormByValue(value);
	}
	
	@When("^I submit carHireSerchGadget$")
	public void submitCarHireSG() {
		carHireSearchGadget.searchCarHireResults();
	}

}
