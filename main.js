//Selecionando elementos DOM
const inputPeso = document.querySelector("#inputPeso");
const inputAlt = document.querySelector("#inputAlt");
const rdbF = document.querySelector("#rdbF");
const rdbM = document.querySelector("#rdbM");
const resultado = document.querySelector("#resultado");
const mensagem = document.querySelector("#mensagem");
const btnCalc = document.querySelector("#btnCalc");
const btnLimp = document.querySelector("#btnLimp");

const checkFill = () => {
  if (inputPeso.value === "") {
    alert("Preencha com o seu peso!");
    inputPeso.focus();
  } else if (inputAlt.value === "") {
    alert("Preencha com a sua altura!");
    inputAlt.focus();
  } else if (!rdbF.checked) {
    if (!rdbM.checked) {
      alert("Preencha o seu sexo!");
    }
  }
};

const checkType = () => {
  //verifica se o valor não é um número,se não for retorna true e atende a condição
  if (isNaN(inputPeso.value)) {
    alert("Preencha o peso apenas com números!");
  } else if (isNaN(inputAlt.value)) {
    alert("Preencha a altura apenas com números!");
  }
};

btnCalc.addEventListener("click", (e) => {
  //removendo função padrão do botão
  e.preventDefault();
  checkFill();
  checkType();
});

btnLimp.addEventListener("click", (e) => {
  e.preventDefault();

  inputPeso.value = "";
  inputAlt.value = "";
  rdbF.checked = "";
  rdbM.checked = "";
  resultado.textContent = "";
  mensagem.textContent = "";
});
