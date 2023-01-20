const {test,expect}=require('@playwright/test');
const {ctest}=require('../utils/test-data');
const {PoManager}=require('../pages/PoManager');
const {UiUtils}=require('../utils/UiUtils');
const data=JSON.parse(JSON.stringify(require('../utils/SignUpPageTestdata.json')) ) ;

for(const tdata of data){
test(`Signup to Miro flow1 ${tdata.name}`,async({page})=>
{
const pomanager=new PoManager(page);
const indexpage=pomanager.getIndexpage();
const uiutils=new UiUtils();
await indexpage.navigatetoURL();
await indexpage.validatepagetitle(); 
await indexpage.valiadteemailidbackgroundtext();
const randomemail=uiutils.generateRandomEmail();
await indexpage.enteremail(randomemail);
await indexpage.clickonSignupfree(1);

const signuppage=pomanager.getSignuppage();
await signuppage.enternameandcontinue(tdata.name,1);
const passwordmessage=uiutils.generateRandomPassword();
await signuppage.enterpasswordandcontinue(passwordmessage,2);
await signuppage.validateheadertitle();
await signuppage.verifythepresenseofemail(randomemail)


});
}

ctest('Signup to Miro flow2',async({page,fixturedata})=>
{
const pomanager=new PoManager(page);
const indexpage=pomanager.getIndexpage();
const signuppage=pomanager.getSignuppage();
const uiutils=new UiUtils();
await indexpage.navigatetoURL();
await indexpage.validatepagetitle(); 

const randomemail=uiutils.generateRandomEmail();

await indexpage.clickonSignupfree(0);
await indexpage.enteremail(randomemail);
await signuppage.clickcontinue(0);

await signuppage.enternameandcontinue(fixturedata.name,1);

const passwordmessage=uiutils.generateRandomPassword();
await signuppage.enterpasswordandcontinue(passwordmessage,2);
await signuppage.validateheadertitle();
await signuppage.verifythepresenseofemail(randomemail)


});

