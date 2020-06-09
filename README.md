# cart-form

Projeto de desenvolvimento do formulário de uma página de pagamento.

Requisitos: `node ^v12 ou mais`

## Instalar as dependências do projeto 

Para realizar a instalação das dependencias do projeto deve-se rodar o seguinte comando:

`yarn install`

Ou se preferir utilizar o NPM:

`npm install`

## Utilizar em ambiente local

Para testar a utilização da plataforma em ambiente local, deve-se utilizar o seguinte comando:

`yarn start`

ou se estiver utilizando o npm:

`npm start`


## Realizar testes

Para realizar os testes utiliza-se o seguinte comando:

`yarn test`

ou 

`npm test`

## Abrir storybook

Para abrir o storybook do projeto utiliza-se o seguinte comando:

`yarn storybook`

ou

`npm run storybook`

### Decisões

#### styled-components

Utilizou-se styled components para modular tanto o HTML dos componentes quanto o CSS no mesmo local, assim, centralizando todas as responsabilidades do componente, além de poder utilizar props para alterar o CSS do componente em relação ao seu estado.

#### styled-system
Utilizou-se por styled-system para passar os valores de algumas propriedades CSS no momento da chamada do componente, assim, criando um componente mais agnóstico e adaptável as várias necessidades que o sistema possa a ter.

#### styled-tools
Optou-se por styled-tools para a utilização do Theme, centralizando assim todas as decisões de paletas de cores que o UX possa tomar, além da utilização de IfProps que junto com o styled-components torna mais legível as possíveis escolhas de layout que um componente possa ter.