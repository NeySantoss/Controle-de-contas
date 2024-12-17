const formEl = document.querySelector("form");
const accountEl = document.getElementById("account");
const accountValueEl = document.getElementById("account-value");
const resultEl = document.getElementById("result");
const totalEl = document.getElementById("total");

formEl.addEventListener("submit", registrarConta);

let result = "";
let accontNum = 0;
let totalValue = 0;

function registrarConta(event) {
    event.preventDefault();

    const account = accountEl.value;
    const accontValue = parseFloat(accountValueEl.value);
    
    if(account === "" || accontValue === "" || isNaN[accontValue]){
        alert("Por favor, Digite o nome da conta!!");
            accountEl.focus();
        return;
    }

    accontNum++;
    totalValue += accontValue;

    result += `<p class="result">${account} - ${accontValue.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}</p>`; 
    resultEl.innerHTML = result;

    totalEl.innerHTML = `<p class="total">${accontNum} contas(s) - Total: ${totalValue.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}</p>`

    accountEl.value = "";
    accountValueEl.value = "";
    accountEl.focus(); 
}