// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-date").innerHTML = currentDate;
}
 
// Write a JavaScript program to convert a string to the number.
const displayNumber = () => {
  let a = "200";
  let b = "34n4n";
  let c = "125.98";

  resultA = parseInt(a) + 500;
  document.getElementById("display-number").innerHTML = resultA;
}

// Write a JavaScript program to convert a number to a string.
const displayString = () =>{
  var x = 19;
  console.log(typeof x);
  res = x.toString();
  console.log(typeof res);
  document.getElementById("display-string").innerHTML = res;
}


// Write a JavaScript program that runs only when 2 things are true.
const displayTrue = (x, y) => {
  if(x === true && y === true){
    document.getElementById("display-true").innerHTML = "x = " + (x) + " y = " + (y);
  }
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const displayTypes = (data) =>{

      if (typeof(data) == 'boolean') {
        res = "This is a boolean value";
      }
      else if (typeof(data) === 'null') {
        res = "null";
      }
      else if (typeof(data) === 'undefined') {
        res = "undefined";
      }
      else if (typeof(data) === "number") {
        res = "number";
      }
      else if (data === "nan"){
        res = "nan";
      }
      else if (typeof(data) === "string") {
        res = "string";
      }
    document.getElementById("display-types").innerHTML = res;  
}


 
// Write a JavaScript program that adds 2 numbers together.
const displayAdd = (x, y) =>{
  var res = x + y;
  console.log(res);
  document.getElementById('display-add').innerHTML = res;
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const displayThingsTrue = (x, y) => {
  if(x === true || y === true){
    document.getElementById("display-things").innerHTML = "x = " + (x) + " y = " + (y);
  }
}



// Write a JavaScript program that runs when both things are not true.  
const displayNotTrue = (x, y) => {
  if(x === false && y === false){
    document.getElementById("display-nTrue").innerHTML = "x = " + (x) + " y = " + (y);
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

