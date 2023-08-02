//Selecionando elementos DOM
const inputPeso = document.querySelector("#inputPeso");
const inputAlt = document.querySelector("#inputAlt");
const rdbF = document.querySelector("#rdbF");
const rdbM = document.querySelector("#rdbM");
const resultado = document.querySelector("#resultado");
const mensagem = document.querySelector("#mensagem");
const btnCalc = document.querySelector("#btnCalc");
const btnLimp = document.querySelector("#btnLimp");

//checando o tipo dos valores e se os inputs estão preenchidos
const auth = () => {
  if (inputPeso.value === "") {
    alert("Preencha com o seu peso!");
    inputPeso.focus();
  } else if (isNaN(inputPeso.value)) {
    alert("Preencha o peso apenas com números!");
    inputPeso.focus();
  } else if (inputAlt.value === "") {
    alert("Preencha com a sua altura!");
    inputAlt.focus();
  } else if (isNaN(inputAlt.value)) {
    alert("Preencha a altura apenas com números!");
    inputAlt.focus();
  } else if (!rdbF.checked && !rdbM.checked) {
    alert("Preencha com o seu sexo!");
  } else {
    btnCalc.focus();
    return true;
  }
};

//função que define mensagem dependendo do imc e do sexo
const messagePerImc = (imc) => {
  if (rdbF.checked) {
    if (imc < 19) {
      mensagem.textContent = "Peso abaixo do normal";
    } else if (imc < 23.9) {
      mensagem.textContent = "Peso Normal";
    } else if (imc < 28.9) {
      mensagem.textContent = "Obesidade leve";
    } else if (imc < 38.9) {
      mensagem.textContent = "Obesidade moderada";
    } else {
      mensagem.textContent = "Obesidade mórbida";
    }
  } else {
    if (imc < 20) {
      mensagem.textContent = "Peso abaixo do normal";
    } else if (imc < 24.9) {
      mensagem.textContent = "Peso Normal";
    } else if (imc < 29.9) {
      mensagem.textContent = "Obesidade leve";
    } else if (imc < 39.9) {
      mensagem.textContent = "Obesidade moderada";
    } else {
      mensagem.textContent = "Obesidade mórbida";
    }
  }
};

//evento de click no botão calcular
btnCalc.addEventListener("click", (e) => {
  //removendo função padrão do botão
  e.preventDefault();
  if (auth()) {
    const imc = inputPeso.value / (inputAlt.value * inputAlt.value);
    resultado.textContent = `Seu IMC é de: ${imc.toFixed(2)}`;

    messagePerImc(imc);
  }
});

//limpa o forms
btnLimp.addEventListener("click", (e) => {
  e.preventDefault();

  inputPeso.value = "";
  inputAlt.value = "";
  rdbF.checked = "";
  rdbM.checked = "";
  resultado.textContent = "";
  mensagem.textContent = "";

  inputPeso.focus();
});
