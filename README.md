## Bank With Javascript
```
                      (@#                                              
              @@@@@@@@@@@@@@@@@                                       
            @@@@@@@@@@@@@@@@@@@@@@@                                    
          @@@@@@@@@@@@@@@@@@@@@@@@@@@                                  
        @@@@@@@@@@@       @@@@@@@@@@@                                 
        @@@@@@@@@@           @@@@@@@@@@                                
        @@@@@@@@@              @@@@@@*                                 
        @@@@@@@@@                                                      
        @@@@@@@@@                                                     
        #@@@@@@@@%                                                    
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                   
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                  
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                  
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                   
            @@@@@@@@@                                                  
            .@@@@@@@@                                                  
            @@@@@@@@@                                                  
          @@@@@@@@@@                                                   
        @@@@@@@@@@@                                                    
    (@@@@@@@@@@@@@@@@@@@@@@@@%     @@@                                 
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                              
    @@@@@/             .@@@@@@@@@@@@@@ 
```
### This program is designed to emulate a bank statement. The functionality is as follows:

* View your statement - formatted with a header at the top, with the most recent transactions first.
* Deposit money.
* Withdraw money.

This system was built using the following [TDD](https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%2Ddriven%20development%20(TDD),software%20against%20all%20test%20cases.). (Jest)

## Installation
Fork or download this repo.
Use `npm install` to install the correct dependancies to use and test this code. You can require the code from terminal, or copy & paste it in Node.

## How To Use
Make a new instance of bank with `const bank = new bankApp();`.
Call `.deposit(x)` to deposit `x` money into your bank account.
Call `.withdraw(x)` to withdraw `x` money into your bank account.
Call `.viewStatement()` to show your bank statement.

## How To Test
Run `jest` to run through tests.

## Future features // Edge cases
* Protection is built in against withdrawing an amount that is greater than the balance.

