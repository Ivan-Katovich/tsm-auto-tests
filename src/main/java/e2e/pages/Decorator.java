package e2e.pages;

import e2e.Browser;
import org.openqa.selenium.support.PageFactory;

public class Decorator {
    public static LoginPage getLoginPage(){
        LoginPage page =  new LoginPage();
        PageFactory.initElements(Browser.Driver, page);
        return page;
    }

    public static SiteAdminPage getSiteAdminPage(){
        SiteAdminPage page =  new SiteAdminPage();
        PageFactory.initElements(Browser.Driver, page);
        return page;
    }
}
