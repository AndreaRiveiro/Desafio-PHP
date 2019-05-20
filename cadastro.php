<?php
    $nome = $_Pot["nome"];
    $categoria = $_POST["categoria"];
    $quant = $_POST["quant"];
    $preco = $_POST["preco"];
    $file = $_POST["file"];

function salvarProduto("$novoProduto"){
    if (!file_existis("produtos.json")) {
       $incluir ["listaProdutos"] = [$novoProduto];
       $jsonProdutos = json_encode ($produtos);
       file_put_contents("produtos.json", $jsonProdutos);
       echo "<script>alert('Produto salvo com sucesso!')</script>"; 
    } else {
        $jsonProdutos = file_get_contents("produtos.json");
        $listaProdutos = json_decode($jsonProdutos, true);
        $listaProdutos ["listaProdutos"][] = $novoProduto;
        $jsonListaProdutos = json_encode($listaProdutos);
        file_put_contents("produtos.json", $jsonListaProdutos);
        echo "<script>alert('Produto salvo com sucesso!')</script>"; 
    }
    
}

?>