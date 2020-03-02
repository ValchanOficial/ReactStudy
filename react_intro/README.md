# TreinaWeb - React - Introdução

- Criando aplicação React:
$ npm install -g create-react-app
$ create-react-app nome-do-app

- Gerando arquivo para produção:
npm run build

- Comentário
{/* comentário */}

- Babel
Ferramenta muito utilizada para transpilação.

- WebPack
Ferramenta utilizada para empacotar aplicações

- O que é Transpilação?
Processo de conversão de um código para outro com um nível similar de abstração.

- O que são Componentes?
Elementos de interface com aparência e comportamento próprios que podem ser reutilizados.

- Propriedades
Propriedades são valores que passamos para um componente e ficam dentro do objeto "props". O componente não pode modificá-las.

- Estado
Estado indica as variáveis internas do componente, as quais podem ser modificadas. Essas variáveis ficam dentro do objeto "state" e são modificadas pela função "setState()".

- Componentes Controlados
Elementos que possuem seu valor controlados pelo React.
Podemos executar o "setState()" para manter o estado do componente atualizado com o valor do elemento. Sem isso o elemento não permitirá alterações.

- Componentes Não Controlados
Elementos que seu valor não é controlado pelo React.

- Criando Referências
Para criar uma referência, execute "React.createRef()". Guarde o retorno em uma variável e passe-a para um elemento pela propriedade "ref".

- Como passar um valor padrão para um elemento?
defaultValue