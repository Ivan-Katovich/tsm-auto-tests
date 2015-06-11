package com.epam.environment.pageObjects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;


import org.openqa.selenium.chrome.ChromeDriver;

import com.epam.environment.pageObjects.searchGadgetForms.CarHireSearchGadget;

import cucumber.api.Scenario;
import cucumber.api.java.en.When;

public class PageFactory {
	
	protected static WebDriver driver;
	
	public static void setUpDriver() {
		String os = System.getProperty("os.name").toLowerCase();
		System.out.println(" ========= "+os);
		System.setProperty("webdriver.chrome.driver", "additional_libraries/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	public static void shutDownDriver() {
		driver.close();
	    driver.quit();
	}
	
	public static void screenInAfter(Scenario scenario) {
		try {
            if (scenario.isFailed()) {
                final byte[] screenshot = ((TakesScreenshot) driver)
                        .getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } 
		} catch (Exception e) {
        	e.printStackTrace();
        }
	}
	
	public static SuperHomePage getSuperHomePage(){
//		driver.get("http://www.sit1.gb.travelsupermarket.com/beta/");
		return new SuperHomePage(driver);
	}
	
	public static CarHireSearchGadget getCarHireSearchGadget(){
//		driver.get("http://www.sit1.gb.travelsupermarket.com/beta/");
		return new CarHireSearchGadget(driver);
	}

	

}
