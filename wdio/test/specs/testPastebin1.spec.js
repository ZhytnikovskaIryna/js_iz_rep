import CreatedPage from "./pages/created.page.js";
import  PastebinPage from "./pages/pastebin.page.js";
/*describe('Test 1', ()=>{
     it('SimplePaste', async ()=>{
        await PastebinPage.open();
        await PastebinPage.setText.click();
        await PastebinPage.setText.setValue('Hello from WebDriver');
    
        await PastebinPage.setName.click();
        await PastebinPage.setName.setValue('hello web');

        await PastebinPage.expirationList.click();
        await PastebinPage.tenMinutesOption.click();

        await PastebinPage.buttonCreatePaste.click();

        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("hello web - Pastebin.com");
        browser.pause(3000);
    })
})
*/
describe('Test 2', ()=>{
    it('BashPaste', async ()=>{
    
        await PastebinPage.open();
        await PastebinPage.setName.click()
        await PastebinPage.setName.setValue('how to gain dominance among developers');   
        await PastebinPage.setText.click();
        await PastebinPage.setText.setValue('git config --global user.name "New Sheriff in Town \ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \ngit push origin master --force');
        
        await PastebinPage.expirationList.click();
        await PastebinPage.tenMinutesOption.click();

        await PastebinPage.syntaxList.click();
        await PastebinPage.setBashOption.click();
        await PastebinPage.buttonCreatePaste.click();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("how to gain dominance among developers - Pastebin.com");
        const bashStyle = await CreatedPage.bashSyntax;
        await expect(bashStyle).toHaveText("Bash");
        const code = await CreatedPage.getCode;
        await expect(code).toHaveText('git config --global user.name "New Sheriff in Town \ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \ngit push origin master --force');
    })
})
