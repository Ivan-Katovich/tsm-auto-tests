package e2e;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "json:reports/cucumber.json"})
public class Run {

    @BeforeClass
    public static void SetupTest() {
        Config.InitParams();
        Browser.Start();
    }

    @AfterClass
    public static void TeardownTest() {
        Browser.Close();
    }

}
