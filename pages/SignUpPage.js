const {expect}=require('@playwright/test');

class SignUpPage{

    constructor(page)
    {
        this.page=page;
        this.nameinputtextbox= page.locator("input[name='signup[name]']");
        this.continueBtnName=page.locator("button.signup__submit");
        this.passwordinput=page.locator("input[type='password']");
        this.signuptermsandcondition=page.locator("label[for='signup-terms']>svg[class='mr-checkbox-1__icon']");
        this.headertitlemessage=page.locator("h1[class='signup__title-form']");
        this.emailpresense=page.locator(".signup__subtitle-form strong");

        

    }
    async enternameandcontinue(name,index)
    {
       
         await this.nameinputtextbox.type(name);
       
        await this.clickcontinue(index);


    }
    async clickcontinue(index){

        await this.continueBtnName.nth(index).click();
    }
    async enterpasswordandcontinue(password,index)
    {
        
        await this.passwordinput.type(password);
        await this.signuptermsandcondition.click();
        await this.clickcontinue(index);

    }
    async validateheadertitle(){

       // expect((await this.headertitle.innerText()).valueOf().trim()).toContain('Check your email');
        //expect(await this.headertitle.innerText().valueOf().trim().toContainText('Check your email'));
        expect((await this.headertitlemessage.innerText()).valueOf().trim()).toContain('Check your email');
    }
    async verifythepresenseofemail(email){

    await expect(this.emailpresense).toContainText(email);

    }
    
}
module.exports={SignUpPage};