package e2e;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;



public class Browser {

    public static WebDriver Driver;

    private static void InitDriver(){

//        // this address available from TSM infrastructure and Epam
//        //String gridHubUrl = "http://services.ci1-cms.gb.travelsupermarket.com/wd/hub";

        // this address available only from TSM infrastructure
        String gridHubUrl = "http://selenium-hub1.inf1.gb.tsm.internal:4444/wd/hub";

        // 1. run on TSM Grid
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        try {
            Driver = new RemoteWebDriver(new URL(gridHubUrl), capabilities);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        //  2. local run on windows with Google Chrome
//        String os = System.getProperty("os.name").toLowerCase();
//        System.out.println(" ========= "+os);
//        System.setProperty("webdriver.chrome.driver", "additional_libraries/chromedriver.exe");
//        Driver = new ChromeDriver();

        Driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }

    public static void Start() {
        InitDriver();
    }

    public static void Close() {
        Driver.close();
        Driver.quit();
    }

    public static void Open(String url) {
        Driver.get(url);
    }
}
