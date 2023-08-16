class CaixaDaLanchonete {
        calcularValorDaCompra(formaDePagamento, itens) {
            const cardapio = {
                cafe: 3.00,
                chantily: 1.50,
                suco: 6.20,
                sanduiche: 6.50,
                queijo: 2.00,
                salgado: 7.25,
                combo1: 9.50,
                combo2: 7.50,
            };
            const formasDePagamentoValidas = ['dinheiro', 'debito', 'credito'];
            if (!formasDePagamentoValidas.includes(formaDePagamento)) {
                return "Forma de pagamento inválida!";
            }
            let total = 0;
            let hasPrincipal = false;
            let hasExtra = false;
            for (const item of itens) {
                const [codigo, quantidade] = item.split(',');
                if (!cardapio[codigo]) {
                    return "Item inválido!";
                }
                if (codigo !== 'chantily' && codigo !== 'queijo') {
                    hasPrincipal = true;
                }
                if (codigo === 'chantily' || codigo === 'queijo') {
                    if (!hasPrincipal) {
                        return "Item extra não pode ser pedido sem o principal";
                    }
                    hasExtra = true;
                }
                total += cardapio[codigo] * quantidade;
            }
            if (!hasPrincipal) {
                return "Não há itens no carrinho de compra!";
            }
            if (!hasExtra && total === 0) {
                return "Quantidade inválida!";
            }
            if (formaDePagamento === 'dinheiro') {
                total *= 0.95; 
            } else if (formaDePagamento === 'credito') {
                total *= 1.03; 
            }
            return `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

    }

    export { CaixaDaLanchonete };
