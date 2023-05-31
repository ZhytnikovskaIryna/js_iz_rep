// pastebin.page.js
import Page from './page.js'

class PastebinPage extends Page {

  //  get pageTitle () { return &(#)}
    get setText () { return $('[name="PostForm[text]"]'); }
    get setName () { return $('[name="PostForm[name]"]'); }
    get expirationList () { return $('[id="select2-postform-expiration-container"]'); }
    get tenMinutesOption () { return $('li=10 Minutes'); }
    get syntaxList () { return $('[id="select2-postform-format-container"]'); }
    get setBashOption(){ return $('li=Bash'); }
    get buttonCreatePaste(){return $('button=Create New Paste');}

0
    async open () {
       // await super.open("https://pastebin.com/z4x5ggYd");
         await super.open("https://pastebin.com/");
    }

}

export default new PastebinPage();