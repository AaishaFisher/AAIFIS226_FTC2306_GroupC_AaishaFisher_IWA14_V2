const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

const greet = () => {
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`);
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}


greet();
