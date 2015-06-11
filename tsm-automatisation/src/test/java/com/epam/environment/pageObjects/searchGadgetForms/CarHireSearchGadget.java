package com.epam.environment.pageObjects.searchGadgetForms;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CarHireSearchGadget {
	
	private WebDriver driver;
	
	@FindBy(id="pickUpLocation_input")
    private WebElement pickUpFromField;
	
	@FindBy(xpath="(//button[contains(@class,'submit')])[3]")
    private WebElement carHireSearchButton;
	
	public CarHireSearchGadget(WebDriver driver){
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	public void fillPickUpFormByValue(String value){
		pickUpFromField.sendKeys(value);
		pickUpFromField.sendKeys(Keys.ENTER);
	}
	
	public void searchCarHireResults(){
		carHireSearchButton.click();
	}

}
