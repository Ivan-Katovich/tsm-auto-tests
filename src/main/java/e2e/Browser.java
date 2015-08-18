package e2e;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;



public class Browser {

    public static WebDriver Driver;

    private static void InitDriver(){
        String os = System.getProperty("os.name").toLowerCase();
        System.out.println(" ========= "+os);
        System.setProperty("webdriver.chrome.driver", "additional_libraries/chromedriver.exe");
        Driver = new ChromeDriver();
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
