const numbers = document.querySelectorAll(".nu"); // button containing numbers
const operators = document.querySelectorAll(".op"); // buttons containing operators
const equal = document.querySelector(".equal"); // equal to button gets result
let dis = document.querySelector(".display"); //display area
let numbb = ""; //var to store input number as string
let ophere = ""; // var to store input operators
let equns = []; // aray to store all user input including op & num

// returns each button and added event listener on each number button
numbers.forEach((num) =>
  num.addEventListener("click", (e) => {
    dis.innerHTML += e.target.value; //shows value entered by user
    numbb += e.target.value; // stores value as string
  })
);
// returns each op button and add event listener on them
operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    dis.innerHTML += e.target.value; //shows value entered by user
    ophere = e.target.value; // stores value as string of operator
    if (numbb !== null) {
      // checking if the number is null
      equns.push(numbb); // appending number to array
      equns.push(ophere); // appending op to array
      numbb = ""; // setting num to empty string for new value
    }
  });
});

// equal to button to perform calculation
equal.addEventListener("click", () => {
  if (numbb !== null && numbb !== "") equns.push(numbb); // prevening empty string to append on the array
  console.log(equns, "befor calculation");
  calculate();
  document.querySelector(".ans").innerHTML = equns.toString(); //display answer
  console.log(equns);
});
const clear = document.querySelector(".clear");
// clearing every variable
clear.addEventListener("click", () => {
  dis.innerHTML = " ";
  numbb = "";
  ophere = "";
  ans = "s";
  equns = [];
  equns.pop();
  console.log(equns);
});
// find the index of all operators according to bodmas rule
//must be conditional

function calculate() {
  let ans;
  let div = equns.indexOf("/"); //find the index of divide

  if (div !== -1) {
    ans = Number(equns[div - 1]) / Number(equns[div + 1]); // convert string into number infront and behind of divide
    equns.splice(div - 1, div + 2, ans.toString()); // slicing the string and removing clculated value and storing answer
    console.log(equns);
  }
  let mul = equns.indexOf("*");
  if (mul !== -1) {
    ans = Number(equns[mul - 1]) * Number(equns[mul + 1]);
    equns.splice(mul - 1, mul + 2, ans.toString());
    console.log(equns);
  }
  let sub = equns.indexOf("-");
  if (sub !== -1) {
    ans = Number(equns[sub - 1]) - Number(equns[sub + 1]);
    equns.splice(sub - 1, sub + 2, ans.toString());
    console.log(equns);
  }
  let add = equns.indexOf("+");
  if (add !== -1) {
    ans = Number(equns[add - 1]) + Number(equns[add + 1]);
    equns.splice(add - 1, add + 2, ans.toString());
    console.log(equns);
  }
}

// function aDvancecalculate() {
//   let ans;
//   let i = 0;
//   let aa = 0;
//   while (equns.length == 1) {
//     if (div !== -1) {
//       ans = Number(equns[div - 1]) / Number(equns[div + 1]);
//       equns.splice(div + 2, div + 1, ans.toString());
//       console.log(equns);
//     }
//     if (mul !== -1) {
//       ans = Number(equns[mul - 1]) * Number(equns[mul + 1]);
//       equns.splice(mul + 2, mul + 1, ans.toString());
//       console.log(equns);
//     }
//     if (sub !== -1) {
//       ans = Number(equns[sub - 1]) - Number(equns[sub + 1]);
//       equns.splice(sub + 2, sub + 1, ans.toString());
//       console.log(equns);
//     }
//     if (add !== -1) {
//       ans = Number(equns[add - 1]) + Number(equns[add + 1]);
//       equns.splice(add + 2, add + 1, ans.toString());
//       console.log(equns);
//     }
//   }
// }
