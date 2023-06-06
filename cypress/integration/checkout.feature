Feature: Fluxo de Checkout



    Scenario: Realizar a compra de um produto

        When eu realizo o busca pelo produto 'mascara hospitalar'
        And clico na lupa para realizar a pesquisa
        And clico no produto
        And adiciono o produto no carrinho
        And clico no icone do carrinho
        And clico em ir para o carrinho
        And clico para fechar o pedido
        And clico em ir para pagamento
        And seleciono a forma de pagamento
        And seleciono a quantidade de parcelas
        And clico em finalizar compra
        Then a mensagem vai ser exibida 'Seu pedido foi recebido e está sendo processado'
