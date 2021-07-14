// VALIDACAO CPF

const validar = (param) => {
    let check = valida(param);
    let elemento = document.getElementById("cpf");
 
    if (check == true){
      elemento.classList.remove("border-danger");
      elemento.classList.add("border-success");
      return true;
   }

   elemento.classList.add("border-danger");
   return false;
}
 
const valida = (strCPF) => {
   let Soma;
   let Resto;
   Soma = 0;
   
   if (strCPF == "") return null;
   if (strCPF == "00000000000") return false;


   for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
   Resto = (Soma * 10) % 11;

   if ((Resto == 10) || (Resto == 11)) Resto = 0;
   if (Resto != parseInt(strCPF.substring(9, 10))) return false;

   Soma = 0;
   for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
   Resto = (Soma * 10) % 11;

   if ((Resto == 10) || (Resto == 11)) Resto = 0;
   if (Resto != parseInt(strCPF.substring(10, 11))) return false;
   return true;
}

const submitForm = () => {
   const cpf = document.getElementById('cpf').value;

   if (validar(cpf)) {
      document.getElementById('formcadastro').innerHTML = "Cadastro enviado!";
   }
}
