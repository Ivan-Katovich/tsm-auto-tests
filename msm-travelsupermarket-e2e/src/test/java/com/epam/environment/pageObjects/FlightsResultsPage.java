package com.epam.environment.pageObjects;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;

public class FlightsResultsPage{
	
	//url items
	protected static final String uri = "/beta/c/flight/results/";
	protected static final String items = "?searchGadgetForm=true";
		
	private WebDriver driver;
	
	public FlightsResultsPage(WebDriver driver){
		this.driver = driver;
	}
		
}
