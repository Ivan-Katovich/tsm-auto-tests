package com.epam.environment.pageObjects;

import java.util.LinkedHashMap;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.epam.environment.stepDefinition.Hooks;
import com.epam.environment.stepDefinition.SuperHomePageSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SuperHomePage{
	
	private static final Logger log = Logger.getLogger(SuperHomePageSteps.class);
	
	//url items
//	private static final String uri = "/beta/";
//	private static final String items = "?searchGadgetForm=true";
	private WebDriver driver;
	
	@FindBy(css=".hero-section__heading-title")
    private WebElement pageTitle;
	
	@FindBy(xpath="(//button[contains(@class,'searchGadgetForm__channelOption')])[4]")
    private WebElement carHireSGbutton;
	
	
	
	public SuperHomePage(WebDriver driver){
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	public void goToPage(){
		this.driver.get("http://www.sit1.gb.travelsupermarket.com/beta/");
	}
	
	public String getTitleText(){
//		System.out.println("I am in getTextTitle");
		return pageTitle.getText();
	}
	
	public void openCarHireSG(){
		carHireSGbutton.click();
	}
	
	

}
