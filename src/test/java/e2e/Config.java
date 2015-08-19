package e2e;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Config {

    public static String testSiteAdminUrl;
    public static String ciSiteAdminUrl;
    public static String siteAdminlogin;
    public static String siteAdminPassword;

    public static void InitParams(){

        FileInputStream fis;
        Properties property = new Properties();

        try {
            fis = new FileInputStream("src/test/resources/config.properties");
            property.load(fis);

            ciSiteAdminUrl = property.getProperty("ci.siteadmin.url");
            testSiteAdminUrl = property.getProperty("test.siteadmin.url");
            siteAdminlogin = property.getProperty("siteadmin.login");
            siteAdminPassword = property.getProperty("siteadmin.password");

        } catch (IOException e) {
            System.err.println("config.properties doesn't exist !!!");
        }

    }


}
