const btn = document.querySelectorAll("button");
const label = document.querySelector(".display");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let calculated = false;
    btn.forEach(btn => btn.onclick = () =>{
        console.log(calculated);
        if(btn.textContent == "+"|| btn.textContent == "/"||btn.textContent == "-"||btn.textContent == "*" ){
            firstNumber = parseFloat(label.textContent);
            operator = btn.textContent;
            label.textContent = "";
        }else if(btn.textContent == "%"){
            firstNumber = parseFloat(label.textContent);
            operator = "%";
            console.log("working");
            label.textContent = "";
            operate(firstNumber, secondNumber, operator);
        }else if(btn.textContent == "="){
            secondNumber = parseFloat(label.textContent);
            operate(firstNumber, secondNumber, operator);
        }else if(btn.textContent == "AC"){
            label.textContent = "";
            firstNumber = 0;
            secondNumber = 0;
        }else if(btn.textContent == "+/-"){
            if(label.textContent[0] == "-"){
                label.textContent = (parseFloat(label.textContent) - 2 * parseFloat(label.textContent));
            }else if(label.textContent[0] != "-"){
                label.textContent = (parseFloat(label.textContent) - 2 * parseFloat(label.textContent)); 
            }
        }else{
            if(calculated == true){
                calculated = false;
                label.textContent = btn.textContent;
            }else{
                label.textContent = label.textContent + btn.textContent;
            } 
        }
    });
    function operate(firstNumber, secondNumber, operator){
        if(operator == "+"){
            label.textContent = firstNumber + secondNumber;
            calculated = true;
        }else if(operator == "-"){
            label.textContent = firstNumber - secondNumber;
            calculated = true;
        }else if(operator == "%"){
            label.textContent =  firstNumber / 100;
            calculated = true;
        }else if(operator == "/"){
            if(secondNumber == 0){
                alert("CAN NOT DIVIDE A NUMBER BY 0");
                label.textContent = "";
            }else{
                label.textContent = firstNumber / secondNumber;
            }
            calculated = true;
        }else if(operator == "*"){
            label.textContent = firstNumber * secondNumber;
            calculated = true;
        }
    }