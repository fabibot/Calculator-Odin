function add(a, b) {
    let result = parseFloat(a + b).toFixed(2);
 return result;
}
function subtract(a, b){
    let result = parseFloat(a - b).toFixed(2);
    return result;
}
function multiply(a, b){
    let result = parseFloat(a * b).toFixed(2);
    return result;
}
function divide(a, b){
    let result = parseFloat(a / b).toFixed(2);
    return result;
}

function calculate(a, b, operator){
    if (a == null || operator == null){
        return b;
    }
    let result;
    if (operator == "+"){
        result = add(a, b);
    }
    if (operator == "-"){
        result = subtract(a, b);
    }
    if (operator == "*"){
         result = multiply(a, b);
    }
    if (operator == "/"){
        result = divide(a, b);
    }
  return result;
}

let accumulator;
let number;
let operator;


const button = document.querySelectorAll(".button");
console.log(button);
const screenInput = document.querySelector('#input');
let numberIsStarted = false;
let operatorList = ['+', '-', '/', '*', '=', 'ac'];
let currentResult = 0;


for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
    let input = button[i].innerHTML;

    if(!operatorList.includes(input)){
        if (numberIsStarted == false){
            if(input == "."){
                input = null;
            }
            numberIsStarted = true;
            screenInput.textContent = input;
            number = parseFloat(input);
        } else {
            if(input == "."){
                if(screenInput.innerHTML.includes('.')){
                    input = null;
                } else {
                    let currentInput = screenInput.innerHTML;
                    screenInput.textContent = currentInput + input;
                }
            } else {
            let currentInput = screenInput.innerHTML;
            screenInput.textContent = currentInput + input;
            number = screenInput.innerHTML;
            }
        }
    } else { 
        console.log(input) 
        numberIsStarted = false;
        
        if(input == "ac"){
            screenInput.textContent = "...";
            reset();
        }
        currentResult = calculate(accumulator, number, operator);
        screenInput.textContent = currentResult;

        if(input == "="){
            screenInput.textContent = calculate(accumulator, number, operator);
            reset();
            currentResult = 0;
        } else {
            operator = input; 
        }  
        
    }
    accumulator = currentResult;
    });
};


function reset(){
    accumulator = null; 
    number = null; 
    operator = null;
    numberIsStarted = false; 
}




