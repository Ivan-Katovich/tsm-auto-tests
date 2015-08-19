package e2e.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {

    @FindBy(css="input#username")
    private WebElement userNameInput;

    @FindBy(css="input#password")
    private WebElement passwordInput;

    @FindBy(css="button.primary")
    private WebElement signInButton;

    public void login(String login, String password){
        userNameInput.sendKeys(login);
        passwordInput.sendKeys(password);
        signInButton.click();
    }
}
