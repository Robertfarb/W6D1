
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sum(...args){
  let arr = Array.from(args);
  let total = 0;
  arr.forEach(el => {
    total += el;
  });
  return total; 
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

Function.prototype.myBind = function(ctx, ...bindArgs){
  return (...callArgs) => { 
    let totalArgs = bindArgs.concat(callArgs);
    return this.apply(ctx, totalArgs);
  };
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function curriedSum(numArgs) {
  let numbers = [];
  
  function _curriedSum(num){
    numbers.push(num);
    if(numbers.length === numArgs){
      return numbers.reduce( (el1,el2) => el1 + el2);
    }
    else { 
      return _curriedSum; 
    }
  } 
  return _curriedSum;
}

// const test = curriedSum(4);
// test(4); 
// test(3);
// test(2);
// console.log(test(1));

// const temp = curriedSum(4);
// // temp(2);
// // temp(3);
// console.log(temp(5)(30)(20)(1)); // => 56


////////////////////////////////////////////////////////////////////////////////////////////////////////////

Function.prototype.curry = function (numArgs) {
  let arr = [];
  let that = this;
  function _curry(arg) {
    arr.push(arg);
    if (arr.length === numArgs) {
      return that(...arr);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function helloName(name) {
  return `Hello ${name}`;  
}

// console.log(helloName.curry(2));
const temp = helloName.curry(4);
console.log(temp("1"));
console.log(temp("2"));
console.log(temp("3"));
console.log(temp("4"));


