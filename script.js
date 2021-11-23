const initialPrice = document.querySelector("#initial-price");
const quantityOfStock = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output");
const analysisImage = document.querySelector("#analysis");
const profitImage = document.querySelector("#profit-image");
const lossImage = document.querySelector("#loss-image");
const mainDiv = document.querySelector("#main");
const mySite = document.querySelector("#my-site");

function doCalculation()
{ 
    let convertIntoPercentage;
    let answer = findProfitOrLoss();
    if(answer === -1)
    {
        let message = "Please enter the appropriate values!!";
        showMessage(message);
    } else if(answer > 0)
    {
        convertIntoPercentage = ((answer/initialPrice.value)*100).toFixed(2);
        let message = ("You have gained " + convertIntoPercentage + "% ." + "Your total profit is Rs." + answer*quantityOfStock.value);
        showMessage(message);
        analysisImage.style.display = "none";
        lossImage.style.display = "none";
        profitImage.style.display = "block";
        changeTheme("#ECFDF5","#10B981");
    } else if(answer < 0)
    {
        convertIntoPercentage = (answer/initialPrice.value)*100;
        convertIntoPercentage = (Math.abs(convertIntoPercentage)).toFixed(2);
        let message = ("You have lost " + convertIntoPercentage + "% ." + "Your total loss is Rs." + Math.abs(answer*quantityOfStock.value));
        showMessage(message);
        analysisImage.style.display = "none";
        profitImage.style.display = "none";
        lossImage.style.display = "block";
        changeTheme("#FEF2F2" , "#DC2626");
    } else if(answer === 0) {
        let message = "No Profit No Loss!!";
        showMessage(message);
        analysisImage.style.display = "block";
    }
}


function findProfitOrLoss()
{
    let purchase = Number(currentPrice.value);
    let quantity = Number(initialPrice.value);
    let current = Number(quantityOfStock.value);
    let answer = 0;
    if(purchase < 1 || quantity < 1 || current < 1)
    {
        answer = -1;
    } else if(currentPrice.value > initialPrice.value)
    {
        let profit = currentPrice.value - initialPrice.value;
        answer = profit;
    } else if(currentPrice.value < initialPrice.value){
        let loss = initialPrice.value - currentPrice.value;
        answer = loss;
    } else if(currentPrice.value === initialPrice.value) {
        answer = 0;
    } 
    return answer;
}

function showMessage(message)
{
    outputBox.style.fontSize = "1rem"
    outputBox.style.margin = "1rem 0 1rem 0";
    outputBox.innerText = message;
}

function changeTheme(light,dark)
{
    document.body.style.backgroundColor = light;
    document.body.style.color = dark;
    checkButton.style.backgroundColor = dark;
    checkButton.style.color = light;
    checkButton.style.border = light;
    mainDiv.style.borderColor = dark;
    mySite.style.color = dark;
}


checkButton.addEventListener("click", doCalculation);