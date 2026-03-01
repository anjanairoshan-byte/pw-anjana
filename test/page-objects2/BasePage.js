import { expect } from '@playwright/test';

import testData from '../../data/testData.json' assert { type: 'json' };

export class BasePage{
  constructor(page){
    this.page = page;
  }

  async navigate(path="/"){
    await this.page.goto(path);
  }  
  //env provided in playwright.config.js file like 30

}