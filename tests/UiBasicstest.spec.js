const {test,expect}=require('@playwright/test');
const {IndexPage}=require('../pages/IndexPage');
const {SignUpPage}=require('../pages/SignUpPage');
const {UiUtils}=require('./utils/UiUtils');

test('Signup to Miro Testcase1',async({page})=>
{
const indexpage=new IndexPage(page);
const uiutils=new UiUtils();
await indexpage.navigatetoURL();
await indexpage.validatepagetitle(); 
await indexpage.valiadteemailidbackgroundtext();
const randomemail=uiutils.generateRandomEmail();
await indexpage.enteremail(randomemail);
await indexpage.clickonSignupfree(1);

const signuppage=new SignUpPage(page);
await signuppage.enternameandcontinue("PersonName",1)
const passwordmessage=uiutils.generateRandomPassword();
await signuppage.enterpasswordandcontinue(passwordmessage,2);
await signuppage.validateheadertitle();
await signuppage.verifythepresenseofemail(randomemail)


});

