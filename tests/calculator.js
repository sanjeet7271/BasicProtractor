let homepage=require('../pages/homepage');

describe('demo calculator test', function(){

    beforeAll(function(){
        return homepage.get("https://juliemr.github.io/protractor-demo/")
    })

    it('addition test', function(){

       // browser.get('https://juliemr.github.io/protractor-demo/');

      // homepage.get('https://juliemr.github.io/protractor-demo/');
       
       homepage.enterFirstNumber('6');
       homepage.enterSecondNumber('4');
       homepage.clickGo();
       homepage.verifyResult('10');
    });

    it('substraction test', function(){

        // browser.get('https://juliemr.github.io/protractor-demo/');
 
        //homepage.get('https://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('6');
        homepage.selectFromDropdown('3');
        homepage.enterSecondNumber('4');
        homepage.clickGo();
        homepage.verifyResult('24');
     });

     it('Division test', function(){

        // browser.get('https://juliemr.github.io/protractor-demo/');
 
        //homepage.get('https://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('6');
        homepage.selectFromDropdown('1');
        homepage.enterSecondNumber('2');
        homepage.clickGo();
        homepage.verifyResult('3');
     });

     it('Module test', function(){

        // browser.get('https://juliemr.github.io/protractor-demo/');
 
        //homepage.get('https://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('6');
        homepage.selectFromDropdown('2');
        homepage.enterSecondNumber('2');
        homepage.clickGo();
        homepage.verifyResult('0');
     });
     it('Module test', function(){

        // browser.get('https://juliemr.github.io/protractor-demo/');
 
        //homepage.get('https://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('6');
        homepage.selectFromDropdown('4');
        homepage.enterSecondNumber('2');
        homepage.clickGo();
        homepage.verifyResult('4');
     });
});