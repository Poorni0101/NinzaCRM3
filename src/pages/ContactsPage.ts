import { BasePage } from "../base/BasePage";
import { Page, expect , Locator, BrowserContext } from '@playwright/test';

export class ContactsPage extends BasePage {
   
  contactsTab: Locator;
  createContactButton:Locator;
 contactName: Locator;
 orgName:Locator;
 title:Locator;
 mobile:Locator;
 plusButton:Locator;
 createContact:Locator;
 //firstSelectButton:Locator;
  
    constructor(page :Page) {
        super(page);
       
       // this.contactsTab = 'link:has-text("Contacts")';
        //this.createContactButton = 'button:has-text("Create Contact")';
        this.contactsTab =   page.getByRole('link', { name: 'Contacts' });
        this.createContactButton = page.getByRole('button',{name :'Create Contact'});
        this.contactName =  page.locator('input[name="contactName"]');
        this.orgName = page.locator('input[name="organizationName"]');
        this.title =page.locator('input[name="title"]');
        this.mobile =page.locator('input[name="mobile"]');
        this.plusButton =  page.locator('button:has([data-icon="plus"])');
        //this.firstSelectButton = newPage.locator('tbody tr').first().locator('button.select-btn');
        this.createContact  =  page.getByRole('button', {name:'Create Contact'});
    }

    
    
    async clickContacts(){
        await this.contactsTab.click();
    }
    async clickCreateContacts(){
        await this.createContactButton.click();
         console.log("clicked");
    }

    async enterContactName(name : string){
        await this.contactName.fill(name);
    }

    async enterOrgName(name :string){
        await this.orgName.fill(name);
    }
    async enterMobile(name : string){
        await this.mobile.fill(name);

    }
    async enterTitle(name : string){
        await this.title.fill(name);
    }
    
    
          async clickPlusButton(context :BrowserContext) {
  return await this.switchToNewPage(context, async () => {
    await this.plusButton.click();
  });
}

  async clickCreateContactButton(){
    await this.createContact.click();
  }

}
   
