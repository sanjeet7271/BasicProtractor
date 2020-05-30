let helper=require('../tests/helper');

let homepage=function(){

    var first_input = element(by.model('first'));
    var op= element(by.model("operator"));
    var second_input = element(by.model('second'));
    var goBtn=element(by.css('[ng-click="doAddition()"]'));

    this.get=function(url){
        browser.get(url);
    }

    this.enterFirstNumber=function(firstNo){
        first_input.sendKeys(firstNo);
    };
    this.enterSecondNumber=function(secondNo){
        second_input.sendKeys(secondNo);
    };

    this.clickGo=function(){
        goBtn.click();
    };

    this.selectFromDropdown=function(operator){
        helper.selectDropdownbyNum(op,operator);
    };

    this.verifyResult=function(result){
        let output=element(by.cssContainingText('.ng-binding',result))
        expect(output.getText()).toEqual(result)
    };

};

module.exports=new homepage();