const initialPrice = document.querySelector("#initial-price");
const quantityOfStock = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output");

function doCalculation()
{ 
    let convertIntoPercentage;
    let answer = findProfitOrLoss();
    if(answer > 0)
    {
        convertIntoPercentage = (answer/initialPrice.value)*100;
        let message = ("You have gained " + convertIntoPercentage + "% ." + "Your total profit is Rs." + answer*quantityOfStock.value);
        showMessage(message);
    } else if(answer < 0)
    {
        convertIntoPercentage = (answer/initialPrice.value)*100;
        convertIntoPercentage = Math.abs(convertIntoPercentage);
        let message = ("You have lost " + convertIntoPercentage + "% ." + "Your total loss is Rs." + Math.abs(answer*quantityOfStock.value));
        showMessage(message);
    } else 
    {
        let message = "No Profit No Loss!!";
        showMessage(message);
    }
}


function findProfitOrLoss()
{

    let answer = 0;
    if(currentPrice.value > initialPrice.value)
    {
        let profit = currentPrice.value - initialPrice.value;
        answer = profit;
    } else if(currentPrice.value < initialPrice.value){
        let loss = initialPrice.value - currentPrice.value;
        answer = loss;
    } else {
        answer = 0;
    }
    return answer;
}

function showMessage(message)
{
    outputBox.innerText = message;
}


checkButton.addEventListener("click", doCalculation);