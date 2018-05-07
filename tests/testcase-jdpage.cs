using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace SeleniumTests
{
    [TestFixture]
    public class TestcaseJdpage
    {
        private IWebDriver driver;
        private StringBuilder verificationErrors;
        private string baseURL;
        private bool acceptNextAlert = true;
        
        [SetUp]
        public void SetupTest()
        {
            driver = new FirefoxDriver();
            baseURL = "http://localhost:3000/";
            verificationErrors = new StringBuilder();
        }
        
        [TearDown]
        public void TeardownTest()
        {
            try
            {
                driver.Quit();
            }
            catch (Exception)
            {
                // Ignore errors if unable to close the browser
            }
            Assert.AreEqual("", verificationErrors.ToString());
        }
        
        [Test]
        public void TheCaseJdpageTest()
        {
            driver.Navigate().GoToUrl(baseURL + "/");
            driver.FindElement(By.Id("name")).Clear();
            driver.FindElement(By.Id("name")).SendKeys("Ana");
            driver.FindElement(By.Id("name")).Clear();
            driver.FindElement(By.Id("name")).SendKeys("Ana");
            driver.FindElement(By.Id("address")).Clear();
            driver.FindElement(By.Id("address")).SendKeys("15 talbot st");
            driver.FindElement(By.Id("address")).Clear();
            driver.FindElement(By.Id("address")).SendKeys("15 talbot st");
            driver.FindElement(By.Id("city")).Clear();
            driver.FindElement(By.Id("city")).SendKeys("Kitchener");
            driver.FindElement(By.Id("city")).Clear();
            driver.FindElement(By.Id("city")).SendKeys("Kitchener");
            driver.FindElement(By.Id("phoneNumber")).Clear();
            driver.FindElement(By.Id("phoneNumber")).SendKeys("226-999-9999");
            driver.FindElement(By.Id("phoneNumber")).Clear();
            driver.FindElement(By.Id("phoneNumber")).SendKeys("226-999-9999");
            driver.FindElement(By.Id("email")).Clear();
            driver.FindElement(By.Id("email")).SendKeys("a@a.com");
            driver.FindElement(By.Id("email")).Clear();
            driver.FindElement(By.Id("email")).SendKeys("a@a.com");
            driver.FindElement(By.Id("carModel")).Clear();
            driver.FindElement(By.Id("carModel")).SendKeys("Mustang");
            driver.FindElement(By.Id("carModel")).Clear();
            driver.FindElement(By.Id("carModel")).SendKeys("Mustang");
            driver.FindElement(By.Id("carYear")).Clear();
            driver.FindElement(By.Id("carYear")).SendKeys("2018");
            driver.FindElement(By.Id("carYear")).Clear();
            driver.FindElement(By.Id("carYear")).SendKeys("2018");
            driver.FindElement(By.Id("carManufacturer")).Clear();
            driver.FindElement(By.Id("carManufacturer")).SendKeys("Ford");
            driver.FindElement(By.Id("carManufacturer")).Clear();
            driver.FindElement(By.Id("carManufacturer")).SendKeys("Ford");
            driver.FindElement(By.XPath("//button[@type='submit']")).Click();
            driver.FindElement(By.XPath("//button[@type='submit']")).Click();
            driver.FindElement(By.XPath("(//a[contains(text(),'See more')])[3]")).Click();
            driver.FindElement(By.XPath("(//a[contains(text(),'See more')])[3]")).Click();
        }
        private bool IsElementPresent(By by)
        {
            try
            {
                driver.FindElement(by);
                return true;
            }
            catch (NoSuchElementException)
            {
                return false;
            }
        }
        
        private bool IsAlertPresent()
        {
            try
            {
                driver.SwitchTo().Alert();
                return true;
            }
            catch (NoAlertPresentException)
            {
                return false;
            }
        }
        
        private string CloseAlertAndGetItsText() {
            try {
                IAlert alert = driver.SwitchTo().Alert();
                string alertText = alert.Text;
                if (acceptNextAlert) {
                    alert.Accept();
                } else {
                    alert.Dismiss();
                }
                return alertText;
            } finally {
                acceptNextAlert = true;
            }
        }
    }
}
