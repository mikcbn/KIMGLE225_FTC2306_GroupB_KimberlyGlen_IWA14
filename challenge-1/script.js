const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (message) => {
  console.log(message);
  console.log(message);
};

const sayHello = () => {
  const message = `Hello, ${firstName} (${age}). I love ${hobby}!`;
  logTwice(message);
};

sayHello();

/*
-The error "hobby is not a function" occurs because hobby has been declared as a
variable initially and then as a function. 

-Issues:

  -The function definitions for add and multiply were incorrect. The arrow
   function syntax was not used correctly. 
  -The add function is defined to add two numbers, but it subtracts them instead. 
  -The multiply function is defined to subtract two numbers, which is incorrect. 
  -The internal function references undefined properties this.add, this.a, and this.b. 
  -In the internal function, the multiplication result of this.multiply is calculated 
   but not stored or used. 
  -The internal function does not return the intended result; it returns
   the this context instead.
*/

/**
 * Fixes Made and Explanations:

    *Arrow function syntax is used correctly for the add and multiply functions.
    *The add function performs addition, and the multiply function performs multiplication. 
    *The internal function is defined correctly, and it uses the
     properties this.internal.a and this.internal.b to perform calculations. 
    *The added and multiplied results are stored and returned as an object from the
     internal function. 
    *In the example1.calculate() and example2.calculate() invocations, 
     the results are logged to the console using console.log.
 */