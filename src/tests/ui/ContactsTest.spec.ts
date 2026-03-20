import {test,expect} from '@playwright/test';
import testdata from '../../testdata/testdata.json';
import { LoginPage } from '../../pages/LoginPage';
import { ContactsPage } from '../../pages/ContactsPage';
import { SelectCampaignPage } from '../../pages/SelectCampaignPage';
let lp :LoginPage;
let cp :ContactsPage;
test.describe('Contact Page', () => {
test.beforeEach(async ({page})=>{
   // lp = new LoginPage(page);
 //  await lp.launchApp(testdata.loginpage.url);
  // await lp.enterUsername(testdata.loginpage.validUsername);
  //  await lp.enterPassword(testdata.loginpage.validPassword);
   // await lp.clickLogin();
    cp = new ContactsPage(page);
});
test('Create Contacts',async({page, context}) =>{
  await page.goto('http://49.249.28.218:8098/contacts');
   // cp = new ContactsPage(page);
    await cp.clickContacts();
    await cp.clickCreateContacts();
    await cp.enterContactName(testdata.contactspage.contactName);
    await cp.enterOrgName(testdata.contactspage.orgName);
    await cp.enterMobile(testdata.contactspage.mobile);
    await cp.enterTitle(testdata.contactspage.title);
    
    const newPage  = await cp.clickPlusButton(context);
    const campPage = new SelectCampaignPage(newPage);
    await campPage.clickSelectButton();  
    //await cp.page.bringToFront();
    await cp.clickCreateContactButton();
    
     console.log("CONTACT CREATION DONE");
});

test('validate contacts dropdown options', async({page}) => {
  await cp.getDropdown();
});


test.afterAll(async ({browser}) => {
 // await browser.close();
});
});