package com.epam.environment.stepDefinition;


import java.util.LinkedHashMap;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.touch.FlickAction;
import org.junit.Assert.*;

import com.epam.environment.cucumberTests.FirstTestRunner;
import com.epam.environment.pageObjects.Page;
import com.epam.environment.pageObjects.SuperHomePage;

import cucumber.api.java.en.*;

public class SuperHomePageSteps {
	
	private static SuperHomePage superHomePage = Page.getSuperHomePage();
	
	
	
	public SuperHomePageSteps() {}
	
	@Given("^I am on SuperHomePage$")
	public void goToSuperHomePage() {
		superHomePage.goToPage();
	}
	
	@Then("^the superHomePage Title has text '(.+)'$")
	public void assertTitleText(String expectedTitleText) {
		org.junit.Assert.assertTrue("title text is '" + superHomePage.getTitleText() + "' but expected text is '" + expectedTitleText + "'",expectedTitleText.equals(superHomePage.getTitleText()));
	}
	
	@When("^I open the carHireSearchGadget$")
	public void openCarHireSearchGadget() {
		superHomePage.openCarHireSG();
	}
	
	


}
