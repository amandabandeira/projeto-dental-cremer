import CheckoutElements from '../elements/CheckoutElements'
const checkoutElements = new CheckoutElements

class CheckoutPage {

    digitarNoInputPesquisar(nomeProduto) {
        cy.get(checkoutElements.inputPesquisa).type(nomeProduto)
    }
    clicarEmPesquisar() {
        cy.get(checkoutElements.buttonProcurar).click()
    }

    clicarImagem() {
        cy.get(checkoutElements.imgProduto).eq(0).click()
    }

    adicionarAoCarrinho() {
        cy.get(checkoutElements.buttonAdicionar).click()
        cy.wait(2000)
    }

    msgSucessoAddCarrinho(mensagem) {
        cy.get(checkoutElements.msgSucessoAddCarrinho).should('have.text', mensagem)
    }

    clicarNoCarrinho() {
        cy.get(checkoutElements.iconeCarrinho).click()
    }

    clicarEmIrParaCarrinho() {
        cy.get(checkoutElements.btnIrParaCarrinho).click()
    }

    clicarFecharPedido() {
        cy.get(checkoutElements.btnFecharPedido).click()
    }

    clicarAddEndereco() {
        cy.get(checkoutElements.clicarNoAddEndereco).click()
    }

    preencherCep(cep) {
        cy.get(checkoutElements.inputCep).type(cep)
    }

    preencherNumero(numero) {
        cy.get(checkoutElements.inputNumero).type(numero)
    }

    preencherComplemento(complemento) {
        cy.get(checkoutElements.inputComplemento).type(complemento)
    }

    preencherTelefone(telefone) {
        cy.get(checkoutElements.inputTelefone).type(telefone)
    }

    clicarSalvarEndereco() {
        cy.get(checkoutElements.btnSalvarEndereco).click()
    }

    clicarEmIrPagamento() {
        cy.get(checkoutElements.btnPagamento).click()
    }

    clicarFormaPagamento() {
        cy.get(checkoutElements.btnFormaPagamento).click()
    }

    selecionarParcela() {
        cy.get(checkoutElements.selectParcelas).select(1)
    }

    clicarFinalizarCompra() {
        cy.get(checkoutElements.btnFinalizarCompra).click()
    }

    mensagemPedidoProcessando(mensagem) {
        cy.get(checkoutElements.msgPedidoProcessando).should('have.text', mensagem)
    }
}

export default CheckoutPage;