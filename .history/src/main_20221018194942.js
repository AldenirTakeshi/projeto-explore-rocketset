import IMask from "imask"
import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccImageLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#ffc600", "#0846bb"],
    mastercard: ["#ec001b", "#f8a01b"],
    elo: ["#00A4E0", "#EF4123"],
    alelo: ["#007858", "#C7D540"],
    american: ["#1f6cb4", "#fffef8"],
    maestro: ["#CC2131", "#3A9BD9"],
    bb: ["#003DA4", "#FFEF38"],
    hipercard: ["#9a1914", "#fcfdf7"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccImageLogo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("default")

globalThis.setCardType = setCardType
//Security Code
const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

//Expiration Date
const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

//Card number
const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: "0000 0000 0000 0000",
}
const cardNumberMasked = IMask(cardNumber, cardNumberPattern)
