//hämta över html
const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balance = document.getElementById("balance")

//skapa arrayer för income och expense
let incomeArray = []
let expenseArray = []
let transactionArray = []
let balanceArray = []
  
    //funktion som lägger input i arrayerna
function sortIncome(){ 

        //Skapa ett nytt transaktionsobjekt, t.ex. { description, amount, type }
        // där type kan vara "income" eller "expense" beroende på knappval.
    const moneyName = desc.value;
    let number = Number(amount.value)
    let incomeType = true
    let moneyObject = {
            moneyName: moneyName,
            number: number,
            incomeType: incomeType
        }
    
        //clear inputfält
    desc.value = ""
    amount.value = ""

        //clear listor för att förhindra att saker visas dubbelt
    desc.innerHTML = ""
    amount.innerHTML = ""
    incomeList.innerHTML = ""
    transactionList.innerHTML = ""
    balance.innerHTML = ""

        //Lägg till transaktionsobjektet i rätt array  
    if(incomeType = true){
        incomeArray.push(moneyObject)
        transactionArray.push(moneyObject)
        balanceArray.push(moneyObject)
   
        //visa upp i income:
    for (moneyObject of incomeArray){
        const li = document.createElement("li")
        li.textContent = `${moneyObject.moneyName} - ${moneyObject.number}:-`  
        incomeList.appendChild(li)
        }

        //visa upp i transaktioner:
    for (moneyObject of transactionArray){
        const li = document.createElement("li")
        li.textContent = `${moneyObject.moneyName} - ${moneyObject.number}:-`  
        transactionList.appendChild(li)
        }

        //visa upp i balance
    for (moneyObject of balanceArray){
        const li = document.createElement("li")
        li.textContent = `${moneyObject.number}`  
        balance.appendChild(li)
        }
    }

        //addera alla nummer
    function sumTransactionNumbers(transactionArray){
    return transactionArray.reduce((total, transaction) => {
    return total + transaction.number;
  }, 0)
}

let total = sumTransactionNumbers(transactionArray);

        //hindra dubbelt i saldot
balance.innerHTML = ""

        //synliggör saldo
    {   const li = document.createElement("li")
        li.textContent = `${total}`  
        balance.appendChild(li)
    }  
}

function sortExpense(){
    
    const moneyName = desc.value;
    let number = Number(amount.value)*-1
    let incomeType = false
    let moneyObject = {
            moneyName: moneyName,
            number: number,
            incomeType: incomeType
        }
    
        //clear inputfält
    desc.value = ""
    amount.value = ""

        //clear listor för att förhindra att saker visas dubbelt
    desc.innerHTML = ""
    amount.innerHTML = ""
    expenseList.innerHTML = ""
    transactionList.innerHTML = ""

        //lägg till i rätt array
    expenseArray.push(moneyObject)
    transactionArray.push(moneyObject)
    balanceArray.push(moneyObject)
  
        //visa upp i expenses:
    for (moneyObject of expenseArray){
        const li = document.createElement("li")
        li.textContent = `${moneyObject.moneyName} - ${moneyObject.number}:-`  
        expenseList.appendChild(li)
    }
              
        //visa upp i transaktioner:
    for (moneyObject of transactionArray){
        const li = document.createElement("li")
        li.textContent = `${moneyObject.moneyName} - ${(moneyObject.number)}:-`  
        transactionList.appendChild(li)
    }   

        //addera alla nummer
    sumTransactionNumbers(transactionArray);

        //hindra dubbelt i saldot
    balance.innerHTML = ""

        //synliggör saldo
    {   const li = document.createElement("li")
        li.textContent = `${total}`  
        balance.appendChild(li)
    }  
 }

    //Visa upp dynamiskt i HTML-elementen för vardera lista.
    //visa det totala saldot i dynamiskt i HTML-elementet för totalen

//lägg till funktionalitet på knappar
expenseBtn.addEventListener("click",() => {
    sortExpense()
})

incomeBtn.addEventListener("click",() => {
   sortIncome()  
})