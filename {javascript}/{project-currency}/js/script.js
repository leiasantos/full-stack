//*COTAÇÃO DE MOEDAS DO DIA 
const USD = 5.25
const EUR	= 5.68
const GBP	= 6.82
const JPY	= 0.035
const CNY	= 0.73
const KRW	= 0.0040
const TRY	= 0.16
const MXN	= 0.31

//* Seleciona os elementos do HTML
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//*Manipuladno o input amount para receber somente números
amount.addEventListener("input", () =>{
  // Criando uma expressão regular (RegExp)
  const hasCharactersRegex = /\D+/g
   amount.value = amount.value.replace(hasCharactersRegex,  "")   
})

//*Capturando o evento de submit (enviar) no formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value){
    case "USD" :
      converterCurrency(amount.value, USD, "$")
    break
    case "EUR" :
      converterCurrency(amount.value, EUR, "€")
    break
       case "GBP" :
      converterCurrency(amount.value, GBP, "£")
    break
       case "JPY" :
      converterCurrency(amount.value, JPY, "¥")
    break
       case "CNY" :
      converterCurrency(amount.value, CNY, "¥")
    break
       case "KRW" :
      converterCurrency(amount.value, KRW, "₩")
    break
       case "TRY" :
      converterCurrency(amount.value, TRY, "₺")
    break
       case "MXN" :
      converterCurrency(amount.value, MXN, "Mex$")
    break
  }

}

//*Função para converter a moeda
function converterCurrency(amount, price, symbol){
  try {
   description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

  let total = amount * price

  if(total < 1){
      result.textContent = `${total.toFixed(2).replace(".", ",")} centavos`
    } else {
      result.textContent = `${formatCurrencyBRL(total)} Reais`
    }

  footer.classList.add("show-result")
    

  } catch (error) {
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
    
  }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style : "currency",
    currency: "BRL",
  })
}