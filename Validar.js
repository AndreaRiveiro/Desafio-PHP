function validarNome(){
    let nome = document.querySelector("#nome");
    if (nome=="") {
        this.style.color = "red";
        this.setAttribute ("placeholder", "Nome do Produto Obrigatório")  
    }
    return;
}

function validarCategoria(){
    let categoria = document.querySelector("#categoria");
    if (value== "") {
        this.style.color = "red";
        this.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    }
    return;
}
    
function validarQuant(){
    let quant = document.querySelector("#quant");
    if (quant== "") {
        this.style.color = "red";
        this.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    }
    return;
}

function validarPreco(){
    let preco = document.querySelector("#preco");
    if (preco== "") {
        this.style.color = "red";
        this.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    }
    return;
}
    
function validarFile(){
    let file = document.querySelector("#carregaImg");
    if (file== "") {
        this.style.color = "red";
        this.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    }
    return;
}
        


$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    validarNome();
    validarCategoria()
    validarQuant();
    validarPreco();
    validarFile();
});
form.submit();



// function validar(event) {
// event.preventDefault();
// validarNome();
// validarCategoria()
// validarQuant();
// validarPreco();
// validarFile();
// }

// let form = document.querySelector("#cadastro");
// this.addEventListener("onsubmit", validar());   
    
   

       

        
        


    