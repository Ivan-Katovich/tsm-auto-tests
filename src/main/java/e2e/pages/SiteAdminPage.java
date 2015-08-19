package e2e.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SiteAdminPage {
    @FindBy(css="div#cq-userinfo")
    private WebElement userInfoToolbar;

    public String getUserName(){
       return userInfoToolbar.getText();
    }
}
