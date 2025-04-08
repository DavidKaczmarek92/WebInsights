package io.web_insights;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class SeleniumGridTest {
    public static void main(String[] args) {
        try {
            // Set the desired capabilities for the browser
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setBrowserName("firefox");

            // Connect to the Selenium Grid Hub
            WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);

            // Open Google webpage
            driver.get("https://www.google.com");

            // Print the title of the page
            System.out.println("Page title is: " + driver.getTitle());

            // Add a delay to see the test on the dashboard
            Thread.sleep(1000);

            // Close the browser
            driver.quit();
        } catch (MalformedURLException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}