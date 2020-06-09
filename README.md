# cart-form

Projeto de desenvolvimento do formulário de uma página de pagamento.

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

### Implementações futuras

#### BFF

Desenvolvimento de um BFF responsável por buscar os textos de cada componente, tirando qualquer texto chumbado dentro do sistema.

#### Multi Theme

Implementação de um mecânismo de multi theme, onde a área de negócio possa determinar qual o tema que estará no ar sem a necessidade de qualquer alteração no sistema. Pensa-se em deixar o BFF como responsável em passar qual será o tema atual.

#### Next

Implementação do Next para a realização do SSR, apesar de não haver a necessidade de indexação de uma página de pagamento, teremos a otimização da performance de carregamento, diminuindo a chance de bounce rate do usuário.