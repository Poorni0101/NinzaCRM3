import { APIRequestContext } from '@playwright/test';

export class ContactClient {
    request: APIRequestContext;
    constructor(request :APIRequestContext){
        this.request = request;
    }
    async getLogin(){
        return this.request.get('/login');
    }

    async getAllContacts(){
        return this.request.get('/contact/all');
    }
async createContact(data: any) {
    return this.request.post('/contact', {
      params: {
        campaignId: 'CAM10310'
      },
      data
    });
  }

  async updateContact(contactId: string, data: any) {
    return this.request.put('/contact', {
      params: {
        campaignId: 'CAM10310',
        contactId: contactId
      },
      data
    });
  }

  async deleteContact(contactId: string) {
    return this.request.delete('/contact', {
      params: {
        contactId: contactId
      }
    });
  }
}