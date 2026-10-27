// ===============================================
// Vinheria Agnello - Sistema Avançado (Sem Arrays/Objetos)
// ===============================================

// ---------- Variáveis Globais de Controle e Estatísticas ----------
var totalCadastros = 0;
var totalEstoqueBaixo = 0;

// Variáveis para rastrear o vinho com a safra mais antiga
var nomeMaisAntigo = "";
var safraMaisAntigo = 9999; // Iniciado com valor alto para a primeira comparação funcionar

// ---------- Funções Obrigatórias e Reutilizáveis ----------

// 1. Função para validar entradas de texto (não permite vazio)
function validarTexto(mensagem) {
    var texto = prompt(mensagem);
    while (texto === null || texto.trim() === "") {
        texto = prompt("Entrada inválida! " + mensaje);
    }
    return texto;
}

// 2. Função para validar números (deve ser maior ou igual a zero)
function validarNumero(mensagem) {
    var numero = Number(prompt(mensagem));
    while (isNaN(numero) || numero < 0) {
        numero = Number(prompt("Por favor, digite um número válido! " + mensagem));
    }
    return numero;
}

// 3. Função para verificar se o estoque está baixo (menos de 5)
function verificarEstoqueBaixo(qtd) {
    return qtd < 5;
}

// 4. Funçao para classificar o vinho com base na idade (Safra atual: 2026)
function classificarVinho(anoSafra) {
    var anoAtual = 2026;
    var idade = anoAtual - anoSafra;
    
    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

// 5. Função para mostrar dados no console e emitir alerta
function exibirDetalhes(nome, tipo, anoSafra, qtd, classificacao, isBaixo) {
    var resumo = "Vinho: " + nome + "\nClassificação: " + classificacao + "\nEstoque Baixo: " + (isBaixo ? "Sim" : "Não");
    alert("Detalhes do Vinho:\n" + resumo);

    console.log("===== VINHERIA AGNELLO =====");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + anoSafra + " (" + classificacao + ")");
    console.log("Quantidade em estoque: " + qtd + " garrafas");
    console.log("Estoque baixo? " + (isBaixo ? "SIM" : "NÃO"));
    console.log("============================");
}


// ---------- Fluxo Principal do Sistema (Laço de Repetição) ----------
var continuar = "sim";

while (continuar.toLowerCase() === "sim" || continuar.toLowerCase() === "s") {
    
    // Coleta de dados utilizando as funções de validação (Escopo Local)
    var nomeVinho = validarTexto("Digite o nome do vinho:");
    var tipoVinho = validarTexto("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
    var safra = validarNumero("Digite a safra (ano) do vinho:");
    var quantidade = validarNumero("Digite a quantidade em estoque:");

    // Processamento de dados via funções
    var estoqueBaixo = verificarEstoqueBaixo(quantidade);
    var classificacao = classificarVinho(safra);

    // Contadores globais
    totalCadastros++;
    if (estoqueBaixo) {
        totalEstoqueBaixo++;
    }

    // Comparação manual passo a passo para encontrar o vinho mais antigo (Sem Arrays)
    if (safra < safraMaisAntigo) {
        safraMaisAntigo = safra;
        nomeMaisAntigo = nomeVinho;
    }

    // Exibição dos dados do vinho atual
    exibirDetalhes(nomeVinho, tipoVinho, safra, quantidade, classificacao, estoqueBaixo);

    // Pergunta se deseja continuar a iteração
    continuar = prompt("Deseja cadastrar outro vinho? (Digite 'sim' para continuar ou qualquer outra tecla para encerrar)");
}


// ---------- Exibição dos Resultados Finais (Relatório) ----------
alert("Gerenciamento encerrado! Veja o relatório consolidado no console.");

console.log("\n====== RELATÓRIO FINAL CONSOLIDADO ======");
console.log("Total de vinhos cadastrados: " + totalCadastros);
console.log("Quantidade de vinhos com estoque baixo: " + totalEstoqueBaixo);
if (totalCadastros > 0) {
    console.log("Vinho mais antigo cadastrado: " + nomeMaisAntigo + " (Safra: " + safraMaisAntigo + ")");
} else {
    console.log("Nenhum vinho foi cadastrado.");
}
console.log("=========================================");
