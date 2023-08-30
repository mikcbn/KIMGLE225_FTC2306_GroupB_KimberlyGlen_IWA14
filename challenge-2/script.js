const add = (a, b) => { return a + b; }
const multiply = (a, b) => { return a * b; }

function internal() {
    const added = this.add(this.internal.a, this.internal.b);
    const multiplied = this.multiply(this.internal.b, this.internal.a);
    console.log(multiplied);
    return this;
}
//removed "console.log(added);" as it was giving extra numbers

// Not allowed to change below this

const example1 = {
    internal: {
        a: 4,
        b: 12,
    },
    add,
    multiply,
    calculate: internal
}

const example2 = {
    internal: {
        a: 2,
        b: 6,
    },
    add,
    multiply,
    calculate: internal
}

example1.calculate();
example2.calculate();


/*
 * Inconsistent variable naming: The variables are defined with different
   names (firstName, age, hobby), but they are referenced with different
   names (name, parameter) later in the code. Improper use of console
   function: console is used incorrectly as console(parameter) instead of
   console.log(parameter). The function hobby has the same name as the
   variable hobby.

Fixes:
  Use consistent variable names (e.g., firstName, age, hobby).
  Change console(parameter) to console.log(parameter) or a similar valid log statement.
  Rename the function hobby to something else, so it doesn't conflict with the variable hobby.
  Variables are declared using const to ensure they cannot be re-assigned accidentally.
  The function logTwice now takes a message parameter, and console.log(message) is used to log the message twice. 
  The function sayHello is defined and uses template literals to create the message variable containing the formatted greeting.
  The function sayHello calls the logTwice function with the message parameter to print the greeting twice.
  The function sayHello is invoked at the end with sayHello(); to execute the code.
 */