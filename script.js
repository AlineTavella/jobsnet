document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("CPF").value != "" && document.getElementById("nascimento").value != "" && document.getElementById("CEP").value != "" && document.getElementById("end").value != "" && document.getElementById("bairro").value != "" && document.getElementById("cidade").value != "" &&
  document.getElementById("cargo").value != "" &&  document.getElementById("cel").value != ""){
    alert("Obrigada! Logo você receberá a confirmação no seu e-mail.")
  }else{
    alert("Por favor, preencha os campos CPF, Nome, Data Nascimento, CEP, Endereço, Número, Bairro, Cidade, Email, Cargo e Celular.")
  }
}


