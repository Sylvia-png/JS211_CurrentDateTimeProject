// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**
// ***************************
//          PART ONE
// ***************************
// ok - Write a JavaScript program to display the current day and time, start with:
console.log(new Date)
const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-date").innerHTML = currentDate;
}
 
//ok - Write a JavaScript program to convert a string to the number.
const displayNumber = () => {
  let num = document.getElementById("numString").value
  numString = num.toString();
  document.getElementById("display-number").innerHTML = `" ${numString} " `;
  console.log(typeof(numString));
}

// ok - Write a JavaScript program to convert a number to a string.
const displayString = () =>{
  let str =  document.getElementById("stringN").value
  stringNum = parseInt(str);
  document.getElementById("display-string").innerHTML = stringNum;
  console.log(typeof(stringNum));
}


// Write a JavaScript program that runs only when 2 things are true.
const displayTrue = () => {
  let thing1 =  document.getElementById("e3-thing1").value
  let thing2 =  document.getElementById("e3-thing2").value
  if(thing1 == "true" && thing2 == "true"){
    document.getElementById("display-true").innerHTML = "all values are true";
  } else {
    document.getElementById("display-true").innerHTML = "all values must be true"
  }
}


//ok - Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const displayTypes = () =>{
  let data =  document.getElementById("dataTxt").value;
  let dataType = typeof(data);
  document.getElementById("display-types").innerHTML = "data: " + data + " dataType: " + dataType;
  console.log(typeof(data));
  console.log(typeof(dataType));
}

// Write a JavaScript program that adds 2 numbers together.
const displayAdd = () =>{
  let x = parseInt(document.getElementById("x").value);
  let y = parseInt(document.getElementById("y").value);
  //let res
  res = x + y;
  console.log(res);
  document.getElementById('display-add').innerHTML = res;
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const displayThingsTrue = () => {
  let thing1 =  document.getElementById("e6-thing1").value
  let thing2 =  document.getElementById("e6-thing2").value
  if(thing1 == "true" || thing2 == "true"){
    document.getElementById("display-things").innerHTML = "one value is true";
  } else {
    document.getElementById("display-things").innerHTML = "all values are false"
  }
}



// Write a JavaScript program that runs when both things are not true.  
const displayNotTrue = () => {
  let thing1 =  document.getElementById("e7-thing1").value
  let thing2 =  document.getElementById("e7-thing2").value
  if(thing1 == "false" && thing2 == "false"){
    document.getElementById("display-nTrue").innerHTML = "all value are false";
  } else {
    document.getElementById("display-nTrue").innerHTML = "all values must be false"
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

