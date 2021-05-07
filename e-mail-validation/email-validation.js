const inpt = document.getElementById("input").value;
const smbt = document.getElementById("submit");
smbt.addEventListener("click", check);

function ValidateEmail() {
  if (inpt.includes("@") && inpt.includes(".")) {
    let name = inpt.split("@")[0]; // [ahmet, hotmail.co] => 0. ahmet
    let website = inpt.split("@")[1].split(".")[0]; // [hotmail, co] => 0. hotmail
    let extension = inpt.split("@")[1].split(".")[1]; // [hotmail, co] => 1. co
    if (
      name.length >= 2 &&
      name.length <= 20 &&
      website.length <= 20 &&
      website.length >= 5 &&
      extension.length >= 2 &&
      extension.length <= 3
    ) {
      return true;
    }
  }

  return false;
}

// console.log(ValidateEmail() ? "valid" : "invalid");

function check() {
  console.log(ValidateEmail() ? "valid" : "invalid");
  console.log((ValidateEmail() && "") || "in" + "valid");
  ValidateEmail() ? console.log("valid") : console.log("invalid");
}

// var username = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/* 1 kullanıcı adı en fazla 20 en az 2 karakter olsun. /-> herhangı bır sembol ıcermesın. @ veya . gırılemesın.
2 @ ısaretı görur görmez websıte bılgısıne gecılsın. en az 5 en fazla 20 karaktere kadar gırılebılsın.
3 . ısaretı gorunce extensıon kısmına gecsın 2 veya 3 karakterden fazlasına ızın vermesın sadece kucuk harf kabul etsın.
 */
