const {expect}=require('@playwright/test');
class IndexPage{
   
    constructor(page)
    {
        this.page=page;
        this.emailidinputtextbox=page.locator("[type='email']");
         this.placeTolderText='Enter your work email';
         this.signUpBtn= page.locator("a[href*='/signup']");
        

    }

    async navigatetoURL()
    {
       /*
        await Promise.all([
           //await this.page.waitForLoadState('networkidle'),
           
            //this.page.waitForNavigation(),
           await this.page.goto('https://miro.com')
         
          ]);
          */
          await this.page.goto('https://miro.com/');
          await this.page.waitForLoadState('networkidle');
    }
    async validatepagetitle()
    {
        await expect(this.page).toHaveTitle("The Visual Collaboration Platform for Every Team | Miro");
    }
    async valiadteemailidbackgroundtext()
    {
        await expect (this.emailidinputtextbox).toHaveAttribute('placeholder',this.placeTolderText);
    }
    async enteremail(email){
        await this.emailidinputtextbox.type(email);
    }
    async clickonSignupfree(index){
        //1 for clicking sigup on the body
        await expect(this.signUpBtn.nth(index)).toContainText('Sign up free')
        await this.signUpBtn.nth(index).click();
    }

}
module.exports={IndexPage};