# Automação com Cypress, Cucumber e Page Object

Este é um repositório contendo uma automação de testes utilizando o Cypress em conjunto com o Cucumber e o padrão Page Object. O Cypress é uma ferramenta de teste de front-end que permite escrever e executar testes automatizados em aplicações web. O Cucumber é uma ferramenta de teste que permite escrever testes em linguagem natural usando a sintaxe Gherkin. O padrão Page Object é um padrão de projeto que permite organizar e reutilizar elementos e ações da interface de usuário.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em seu ambiente de desenvolvimento:

- Node.js (versão 16.0.0)
- NPM (gerenciador de pacotes do Node.js)
- Cypress (versão 9.0.0)

## Configuração do projeto

1. Clone este repositório em sua máquina local: git clone git@github.com:amandabandeira/projeto-dental-cremer.git
2. Acesse o diretório do projeto: cd projeto-dental-cremer
3. Instale as dependências do projeto:npm install

# Executando os testes

Para executar os testes automatizados, utilize o seguinte comando: npx cypress open


O Cypress abrirá uma janela com a interface de teste. A partir dessa interface, você pode selecionar o arquivo de teste que deseja executar e observar os resultados em tempo real.

Se preferir executar os testes em modo headless (sem interface), utilize o seguinte comando:npx cypress run


Os resultados dos testes serão exibidos no terminal.

## Estrutura do projeto

- **cypress/integration**: Neste diretório, você encontrará os arquivos de teste escritos em formato Gherkin com a extensão .feature. Cada arquivo contém cenários de teste descritos em linguagem natural.
- **cypress/support**: Neste diretório, você encontrará arquivos de suporte para a configuração do Cypress, como comandos personalizados e configurações globais.
- **cypress/pageobjects**: Neste diretório, você encontrará arquivos contendo as classes de Page Object que representam as páginas e seus elementos da interface de usuário.


## Recursos adicionais

Para obter mais informações sobre o Cypress, o Cucumber e o padrão Page Object, consulte a documentação oficial:

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Documentação oficial do Cucumber](https://cucumber.io/docs/)
- [Artigo sobre o padrão Page Object](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/)


