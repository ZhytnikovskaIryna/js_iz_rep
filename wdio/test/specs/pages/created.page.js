// pastebin.page.js
import Page from './page.js'

class CreatedPage extends Page {

  //  get pageTitle () { return &(#)}
    get pageTitle () { return $('<title/>'); }
    get bashSyntax () { return  $('=Bash'); }
    get getCode () {return $('div[class="source bash"]');}
    
    

}

export default new CreatedPage();