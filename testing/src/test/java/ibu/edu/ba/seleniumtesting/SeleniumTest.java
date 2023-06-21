package ibu.edu.ba.seleniumtesting;

import static org.junit.Assert.*;

import java.time.Duration;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.TargetLocator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumTest {
	private static WebDriver webDriver;
	private static String baseUrl;

	@Before
	public void setUp() throws Exception {
		System.setProperty("webdriver.chrome.driver", "/Users/xy/Downloads/chromedriver_win32/chromedriver.exe");
		webDriver = new ChromeDriver();		
		baseUrl = "https://cinema-booking-se.vercel.app/";
		
	}

	@After
	public void tearDown() throws Exception {
		webDriver.quit();
	}
	
	@Test 
	public void loginTest() throws InterruptedException {
		webDriver.get(baseUrl);
		webDriver.manage().window().maximize();
		Thread.sleep(3000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/div[2]/button[1]"));
		Thread.sleep(1000);
		WebElement email = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/input"));
		email.sendKeys("info@adnan.com");
		WebElement password = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[2]/input"));
		password.sendKeys("adnan123");
		Thread.sleep(1000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/button"));
		Thread.sleep(5000);
	}
	
	@Test 
	public void registrationTest() throws InterruptedException {
		webDriver.get(baseUrl);
		webDriver.manage().window().maximize();
		Thread.sleep(3000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/div[2]/button[1]")).click();
		Thread.sleep(1000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/p/span")).click();
		Thread.sleep(1000);
		WebElement fname = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div[1]/input"));
		fname.sendKeys("Adnan");
		WebElement lname = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div[2]/input"));
		lname.sendKeys("Ado");
		WebElement email = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[2]/input"));
		email.sendKeys("info@adnan.com");
		WebElement password = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[3]/input"));
		password.sendKeys("adnan123");
		Thread.sleep(1000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/button")).click();
		Thread.sleep(5000);
	}
	
	@Test 
	public void addMovieTest() throws InterruptedException {
		webDriver.get(baseUrl);
		webDriver.manage().window().maximize();
		Thread.sleep(3000);
		//first do login
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/div[2]/button[1]")).click();
		Thread.sleep(1000);
		WebElement email = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/input"));
		email.sendKeys("info@adnan.com");
		WebElement password = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[2]/input"));
		password.sendKeys("adnan123");
		Thread.sleep(1000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/button")).click();
		Thread.sleep(2000);
		webDriver.get(baseUrl + "adminDashboard");
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[1]/button[2]")).click();
		Thread.sleep(1000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[2]/div[1]/div/button")).click();
		//addMovie
		WebElement movieTitle = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div/div[2]/input"));
		movieTitle.sendKeys("title");
		WebElement movieDesc = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div[2]/textarea"));
		movieDesc.sendKeys("desc");
		WebElement bannerUrl = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[3]/div/div[2]/input"));
		bannerUrl.sendKeys("https://www.banner.com");
		WebElement storyline = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[4]/div/div[2]/textarea"));
		storyline.sendKeys("storyline");
		WebElement trailer = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[5]/div/div[2]/input"));
		trailer.sendKeys("https://www.trailer.com");
		WebElement rating = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[6]/div/div[2]/input"));
		rating.sendKeys("9.3");
		WebElement duration = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[7]/div/div[2]/input"));
		duration.sendKeys("2h");
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[8]/div/div[2]/label/span")).click();
		WebElement year = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[9]/div/div[2]/input"));
		year.sendKeys("2020");
		WebElement writer = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[10]/div/div[2]/input"));
		writer.sendKeys("writer");
		WebElement actorRealName = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[11]/div/div[2]/div[2]/input"));
		actorRealName.sendKeys("real name");
		WebElement actorMovieName = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[11]/div/div[2]/div[3]/input"));
		actorMovieName.sendKeys("movie name");
		WebElement actorURL = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[11]/div/div[2]/div[4]/input"));
		actorURL.sendKeys("https://www.actorimage.com");
		WebElement gallery = webDriver.findElement(By.xpath("/html/body/div[1]/div/div[12]/div/div[2]/input"));
		gallery.sendKeys("https://www.gallery1.com");
		Thread.sleep(2000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[13]/button[2]")).click();
		Thread.sleep(5000);

	}
	
	@Test 
	public void deleteUserTest() throws InterruptedException {
		webDriver.get(baseUrl);
		webDriver.manage().window().maximize();
		Thread.sleep(3000);
		//first do login
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[1]/div/div[2]/button[1]")).click();
		Thread.sleep(1000);
		WebElement email = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/input"));
		email.sendKeys("info@adnan.com");
		WebElement password = webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[2]/input"));
		password.sendKeys("adnan123");
		Thread.sleep(1000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div/div/button")).click();
		Thread.sleep(2000);
		webDriver.get(baseUrl + "adminDashboard");
		//deleteUser
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[1]/button[3]")).click();
		Thread.sleep(1000);
		webDriver.findElement(By.xpath("/html/body/div[1]/div/div[2]")).click();
		Thread.sleep(5000);
	}
	

}
