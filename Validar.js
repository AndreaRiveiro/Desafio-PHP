function validarNome(){
    let nome = document.querySelector("#nome");
    if (nome.value=="") {
        nome.style.background = "red";
        nome.setAttribute ("placeholder", "Nome do Produto Obrigatório")  
    };
    return;
}

function validarCategoria(){
    let categoria = document.querySelector("#categoria");
    if (categoria.value== "") {
        categoria.style.background = "red";
        categoria.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    };
    return;
}
    
function validarQuant(){
    let quant = document.querySelector("#quant");
    if (quant.value== "") {
        quant.style.background = "red";
        quant.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    };
    return;
}

function validarPreco(){
    let preco = document.querySelector("#preco");
    if (preco.value== "") {
        preco.style.color = "red";
        preco.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    }
    return;
}
    
function validarFile(){
    let file = document.querySelector("#carregaImg");
    if (file.value== "") {
        file.style.color = "red";
        file.setAttribute ("placeholder", "Escolha Uma Opção Válida")  
    }
    return;
}
        
//$("form" ).on( "submit", function( event ) {
    
//});


form = document.querySelector("#cadastro");
this.addEventListner("onsubimit", function(){
    event.preventDefault();
    if (validarNome(),
    validarCategoria(),
    validarQuant(),
    validarPreco(),
    validarFile() ){
     
    };
    form.submit();
};
);


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
    
   

       

        
        


    