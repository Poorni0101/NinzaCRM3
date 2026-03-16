import { BasePage } from "../base/BasePage";
import { Page, expect , Locator} from '@playwright/test';

export class LoginPage extends BasePage {
    username: string;
  password: string;
  loginButton: string;
  campaignHeader: Locator;
    constructor(page :Page) {
        super(page);
        this.username ='#username';
        this.password = '#inputPassword';
        //this.loginButton = this.page.getByRole('button', { name: 'Sign In' });
        this.loginButton = 'button:has-text("Sign In")';
        this.campaignHeader =  page.getByRole('heading', { name: 'Campaigns' });
        //this.campaignHeader = 'role=heading[name="Campaigns"]';
    }

    async enterUsername(username : string){
        //await this.page.fill(this.username,username);
       await this.fill(this.username, username);
    }
    async enterPassword(password :string){
        await this.fill(this.password,password);
    }
    async clickLogin(){
        await this.click(this.loginButton);
    }
    async validateCampaignHeading(){
        await expect(this.campaignHeader).toBeVisible();
    //   await expect(await this.getLocator(this.campaignHeader)).toBeVisible();
    }
}