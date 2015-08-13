package com.epam.environment.pageObjects;

import java.util.LinkedHashMap;




import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;

public class CarHireResultsPage{
	
	//url items
//	protected static final String uri = "/beta/c/carhire/results/";
//	protected static final String items = "?searchGadgetForm=true";
	private WebDriver driver;
	
	public CarHireResultsPage(WebDriver driver){
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}

}
