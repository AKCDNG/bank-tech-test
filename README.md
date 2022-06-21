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

## My Approach
I initially made an input / output table. Since only one class was needed, I did not feel like it was necessary to create a UML class diagram.

## How To Use
Make a new instance of bank with `const bank = new bankApp();`.

Call `.deposit(x)` to deposit `x` money into your bank account.
Call `.withdraw(x)` to withdraw `x` money into your bank account.
Call `.viewStatement()` to show your bank statement.

## An Example Of Usage
1. Run Node:
![run node in terminal](images/1-run-Node.png)
2. Setup the project with the following code:
![require bank app](images/project-setup.png)
3. Make a new deposit:
![deposit money into bank](images/3-Deposit.png)
4. Make a withdrawal:
![make a withdrawal](images/7-Wtihdraw-after-deposit.png)
5. If you make a withdrawal for an amount greater than your balance, you will receive a message:
![withdrawal error message](images/6-Withdraw-limiter.png)
6. View your statement:
![view statement](images/5-View-statement.png)


## How To Test
Run `jest` to run through tests.

## Future features // Edge cases
* Protection is built in against withdrawing an amount that is greater than the balance.

