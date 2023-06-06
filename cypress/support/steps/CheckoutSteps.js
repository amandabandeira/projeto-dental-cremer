/* global Given, Then, When */

import CheckoutPage from '../pageObjects/CheckoutPage'
const checkoutPage = new CheckoutPage


When("eu realizo o busca pelo produto {string}", (nomeProduto) => {
    checkoutPage.digitarNoInputPesquisar(nomeProduto)
})

When("clico na lupa para realizar a pesquisa", () => {
    checkoutPage.clicarEmPesquisar()
})

When("clico no produto", () => {
    checkoutPage.clicarImagem()
})

When("adiciono o produto no carrinho", () => {
    checkoutPage.adicionarAoCarrinho()
})

When("clico no icone do carrinho", () => {
    checkoutPage.clicarNoCarrinho()
})

When("clico em ir para o carrinho", () => {
    checkoutPage.clicarEmIrParaCarrinho()
})

When("clico para fechar o pedido", () => {
    checkoutPage.clicarFecharPedido()
})

When("clico em ir para pagamento", () => {
    checkoutPage.clicarEmIrPagamento()
})

When("seleciono a forma de pagamento", () => {
    checkoutPage.clicarFormaPagamento()
})

When("seleciono a quantidade de parcelas", () => {
    checkoutPage.selecionarParcela()
})

When("clico em finalizar compra", () => {
    checkoutPage.clicarFinalizarCompra()
})

Then("a mensagem vai ser exibida {string}", (mensagem) => {
    checkoutPage.mensagemPedidoProcessando(mensagem)
})
