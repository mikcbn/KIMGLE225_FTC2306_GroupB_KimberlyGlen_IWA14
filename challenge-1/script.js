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

-
*/