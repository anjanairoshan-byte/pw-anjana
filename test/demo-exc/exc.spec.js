import { test } from '@playwright/test';
import { IntroPage1 } from './IntroPage1';

test('endToend', async({page})=> {
    
    const intro = new IntroPage1 (page);
    await intro.navigateToMain();
    await intro.searchText();

}
)