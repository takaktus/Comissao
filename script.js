function calcularPagamento() {
    let nomeVendedor = prompt("Digite o nome do vendedor:");
    let salario = Number(prompt("Digite o valor do salário fixo:"));
    let valorVendas = Number(prompt("Digite o valor total das vendas:"));
    
    // 1. Comissão 
    let comissao;
    
    if (valorVendas > 3000) {
        comissao = valorVendas * 0.15;
    } else if (valorVendas >= 1500 && valorVendas <= 2999.99) {
        comissao = valorVendas * 0.10; // 10% de comissão
    } else {
        comissao = valorVendas * 0.05; // 5% de comissão
    }
    
    // 3. Pagamento total
    let pagamentoTotal = salario + comissao;
    
    let mensagem = `Vendedor: ${nomeVendedor}\n` +
                   `---\n` +
                   `Valor das Vendas: R$ ${valorVendas.toFixed(2)}\n` +
                   `Valor da Comissão: R$ ${comissao.toFixed(2)}\n` +
                   `Valor do Salário: R$ ${salario.toFixed(2)}\n` +
                   `---\n` +
                   `Pagamento: R$ ${pagamentoTotal.toFixed(2)}`;
    

    alert(mensagem);
    console.log(mensagem); 
}

calcularPagamento();