# Basic Protractor
Node.js, JavaScript, Jashmine, PageObject Model

### Steps to setup Protractor Project
        Step 1 : Download and install node.js and check it gets done or not on cmd
             https://nodejs.org/en/download/
             node -v    ---> check on cmd
             npm -v     ----> check on cmd
       Step 2: npm init -y
       Step 3: download protractor using command prompt
               npm install –g protractor
               npm install protractor --save-dev  
               webdriver-manager update
               Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted (for people facing policy issue)
               webdriver-manager start
              Check http://localhost:4444/wd/hub/static/resource/hub.html in browser

       Step 4: Step 4 : Find conf.js file at C:\Users\Administrator\AppData\Roaming\npm\node_modules\protractor\example

                        On cmd goto the location of this fileand run command

	                      => protractor conf.js
	
	
      Step 5: Download and install Visual Studio Code
              https://code.visualstudio.com/download#
       
      Step 6: Open VS Code

      Step 7 : Install support for JavaScript and TypeScript

      Step 8 : Create a new folder and open in VS Code explorer

      Step 9 : Inside ProtractorDemo folder create 2 folders
                   conf
                   tests
              note : protractor uses jasmine test framework by default Just in case you need to install jasmine use the command

                npm install --save-dev jasmine

              Note : You have to run Step 2 commands in VSCode terminal
              
     Step 10 : Goto the folder :
                C:\Users\Administrator\AppData\Roaming\npm\node_modules\protractor\example

                Copy conf.js into conf folder in VSCode
                Copy example_spec.js into tests folder in VSCode

    Step 11 : In conf.js update location of spec file

    Step 12 : Run conf.js in protractor
               protractor conf.js
       
