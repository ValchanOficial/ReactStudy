# TreinaWeb - React - Dominando Componentes

- O que são componentes?
Elementos de interface reutilizáveis.

- Criando componentes com funções
``` javascript
function Treinaweb(){
   return <h1>Ola Web Developers!</h1>;
}
```

- Criando componentes com classes
Crie uma classe estendendo a classe Component fornecida pelo React. Retorne os elementos no método "render()".
``` javascript
class Treinaweb extends React.Component {
  render() {
    return <h1>Ola web developers!</h1>;
  }
}
```

- Utilizando componentes
Chame o componente pelo nome como se fosse uma tag. Todas as tags devem ser fechadas.
``` javascript
<Treinaweb></Treinaweb>
```
ou
``` javascript
<Treinaweb />
```

- Acessando componentes de Objetos
Podemos ter componentes dentro de objetos:
``` javascript
const MeusComponentes = {
   Treinaweb: function(){
      return <h1>Ola web developers!</h1>
   }
}
```
Para acessar:
``` javascript
<MeusComponentes.Treinaweb />
```
Ou:
``` javascript
const nome = "Treinaweb";
const ComponenteEscolhido = MeusComponentes[nome];
<ComponenteEscolhido />
```
- Propriedades
Dados que passamos aos componentes pela tag (<Treinaweb nome="Akira" />).
Eles não podem ser alterados. São acessados pela propriedade "props".
- Propriedades e o Operador Spread
Você pode passar várias propriedades de uma só vez passando um objeto com o operador spread.
``` javascript
<User {...dados}  />
```
- Estados
Dados internos de cada componente que podem ter seu valor alterado. São acessados pela propriedade "state".

- Alterando Estados
Utilize o método "setState()" para alterar os estados de um componente. Este método reexecuta o "render()" para atualizar a view, então não execute "setState()" dentro de "render()" para não causar um looping infinito.
``` javascript
this.setState({
    time: 5
})
```
Ou:
``` javascript
this.setState(function(state, props){
    return {
        time: state.time + 1
    }
}
```


## Métodos do Ciclo de Vida

Os métodos do Ciclo de Vida de um componente podem ser divididos em três categorias de acordo com o momento da existência do componente em que eles são chamados. Vamos conhecer os principais métodos.

- Mounting
Métodos chamados quando um componente está sendo criado e inserido no DOM.
Eles são chamados na seguinte ordem:
- - **constructor(props)**
Chamado na inicialização de um componente. Normalmente utilizado apenas para chamar "super(props)", iniciar o "state" e executar "bind()" nas funções.
- - **render()**
Executado para retornar a estrutura do nosso componente que será inserida no DOM
- - **componentDidMount()**
Executado após o elemento ter sido inserido no DOM.

- Updating
Métodos chamados durante o processo de atualização de um componente.
Eles são chamados na seguinte ordem:
- - **shouldComponentUpdate(nextProps, nextState)**
Chamado assim que uma propriedade ou estado forem alterados. Essa função é usada para indicar ao React se o componente deve ser alterado.
Ele recebe os próximos valores do props e state.
Caso você retorne "false", o componente não será atualizado.
- - **render()**
Executado para retornar a estrutura do nosso componente que será inserida no DOM
Se o "shouldComponentUpdate()" retornou "false", os dados do componente são atualizados mas o "render()" não é executado, não atualizando a aparência do componente.
- - **getSnapshotBeforeUpdate(prevProps, prevState)**
Chamado antes do componente já atualizado ser inserido no DOM. Ele recebe os valores anteriores do props e state. Assim você pode fazer alguma comparação caso necessário.
Caso você retorne algum valor nesse método, ele será passado como parâmetro para o "componentDidUpdate()".
- - **componentDidUpdate(prevProps, prevState, snapshot)**
Chamado assim que o componente foi atualizado e inserido no DOM.
Ele recebe os valores anteriores do props e state. Caso você tenha retornado algum dado no "getSnapshotBeforeUpdate()", este dado será disponibilizado no parâmetro "snapshot".

- Unmounting
Métodos chamados quando um componente está sendo removido do DOM.
Eles são chamados na seguinte ordem:
- - **componentWillUnmount()**
Método chamado antes do componente ser removido do DOM e destruído.

- Eventos
Os nomes dos eventos devem ser nomeados em camelCase (ex: "onClick") e devem ser passadas funções.
Deve-se utilizar "bind()" ou Arrow Functions para que essas funções não tenham problema de escopo ao acessar o "this".
``` javascript
<button onClick={sayHello.bind(this)} >Click</button>
```

- Parâmetros
O "bind()" e as Arrow Functions também podem nos ajudar quando queremos passar parâmetros para as funções.
``` javascript
<button onClick={sayHello.bind(this, 123)} >Click</button>
```
- Ciclo de Vida dos Componentes
Métodos que são chamados em determinado momento da existência de um componente.
- - Mounting
- - - constructor(props)
- - - render()
- - - componentDidMount()
- - Updating
- - - shouldComponentUpdate(nextProps, nextState)
- - - render()
- - - getSnapshotBeforeUpdate(prevProps, prevState)
- - - componentDidUpdate(prevProps, prevState, snapshot)
- - Unmounting
- - - componentWillUnmount()


- Entendendo o Diffing Algorithm
Fazer alterações diretamente no DOM pode comprometer a performance da sua aplicação se não for feita corretamente. Outros problemas também podem ocorrer como, por exemplo, o gerenciamento de event listeners adicionados à elementos que estão sendo adicionados ou removidos.

Com o React não precisamos nos preocupar com nada disso, e ele ainda lida com as alterações do DOM de maneira inteligente utilizando um algoritmo que faz uma análise em um DOM Virtual para saber exatamente onde as alterações são necessárias. Assim o React acessa o DOM o menor número de vezes possível.

É importante entender como o React funciona, pois isso pode te ajudar a evitar certas situações que podem levar a perda de performance.

Quando executamos o método "render()", uma árvore de elementos é criada. Quando alteramos props ou state de um componente, o "render()" irá retornar algo diferente. A inteligência do React permite que ele faça uma diferenciação rápida, pois analisar totalmente o código gerado em uma aplicação apenas para acessar o DOM um número mínimo de vezes também não seria viável, pois milhares de comparações teriam que ser feitas.

- Comparando Elementos
Dois elementos diferentes provavelmente retornarão árvores de elementos diferentes.

O React primeiro compara os elementos que estão na raiz. Imagine a seguinte situação: temos um componente <ListaUsuarios /> que é removido da tela e no lugar dele é inserido um componente chamado <ListaProdutos />.

Obviamente o "render()" desses dois componentes retornarão conteúdo diferente, então neste momento o React nem se preocupa mais em fazer comparações. A árvore em questão é apagada e uma nova é construída do zero.

Isso acontece com qualquer tipo de elemento.
Então:

``` javascript
<div>
    <ListaProdutos />
</div>

<span>
    <ListaProdutos />
</span>
```

No exemplo acima mantivemos o componente <ListaProdutos />, mas o elemento a sua volta (<div> e <span>) são diferentes. Isso faria com que o React apagasse totalmente nosso <ListaProdutos /> e criasse um novo, mesmo que as propriedades e estados de <ListaProdutos /> não tivessem sido alterados.

- Elementos do mesmo tipo
Quando a comparação chega a um lugar onde os elementos são do mesmo tipo, o React analisa os seus atributos. Se os atributos diferem, apenas eles serão atualizados e o resto continua intocado.

``` javascript
<div class="ativado" style={{color: ‘green’, fontSize: ‘14px’}}>
    <span>TreinaWeb</span>
<div>
<div class="desativado" style={{color: ‘red’, fontSize: ‘14px’}} >
    <span>TreinaWeb</span>
<div>
```

No exemplo acima temos o mesmo elemento (div), então apenas o que é diferente de atributo será alterado. O React é inteligente o suficiente para, inclusive, saber alterar apenas o "color" de "style" e manter o "fontSize" intocado.

Após fazer a diferenciação de um elemento, o React começa a verificar os elementos que estão dentro dele e o ciclo se reinicia, verificando se são elementos do mesmo tipo ou não.

- Componentes do mesmo tipo
Quando um componente é atualizado a sua instância continua a mesma, então métodos como o "constructor()" e "componentDIdMount()" não serão executados novamente, já que são eventos disparados apenas na inicialização.

Métodos de atualização, como o "componentWillReceiveProps()" e "componentWillUpdate()" são chamados. O "render()" é executado novamente para que seu conteúdo seja comparado ao estado anterior para poder ser atualizado também, e lá dentro todo esse ciclo também se reinicia.

- Diferença entre elementos filhos e chaves
Por padrão React irá analisar os elementos filhos e, ao encontrar uma diferença, fará as alterações necessárias.

Imagine a seguinte lista:

``` javascript
<ul>
    <li>Maria</li>
    <li>João</li>
</ul>

<ul>
    <li>Maria</li>
    <li>João</li>
    <li>Karen</li>
</ul>
```

No exemplo acima o React verá que o elemento raiz (ul) é o mesmo, então saberá que não precisa alterar nada e irá verificar os elementos filhos.

Ao chegar nos filhos verá que os dois primeiros <li> são idênticos, então não precisarão de alterações também. Agora temos um novo elemento, então ele simplesmente será inserido no final. Bem simples não é mesmo?

Mas e se o novo item tivesse sido colocado no começo da lista?

``` javascript
<ul>
    <li>Maria</li>
    <li>João</li>
</ul>

<ul>
    <li>Karen</li>
    <li>Maria</li>
    <li>João</li>
</ul>
```

Veja que agora o primeiro item é diferente do novo primeiro, o segundo é diferente do segundo e o João que antes já existia na lista agora será visto como um novo item, pois agora está em terceiro.

Isso fará com que o React pense que precisa fazer duas alterações e a inserção de um novo item (3 operações) ao invés de apenas inserir um item novo no começo (1 operação).

Então, como fazer para o React reconhecer que aqueles itens de antes eram os mesmos? É nesse momento que entram as chaves! Elas identificam cada um dos itens de uma lista como únicos e permitem que o React consiga identificar os itens.

``` javascript
<ul>
    <li key="11" >Maria</li>
    <li key="22" >João</li>
</ul>

<ul>
    <li key="33" >Karen</li>
    <li key="11" >Maria</li>
    <li key="22" >João</li>
</ul>
```

Agora o React é capaz de saber que o elemento com a chave "33" é o novo primeiro item e que os demais apenas foram movidos. Ao comparar esses itens pela chave o React perceberá que eles não sofreram nenhuma alteração e os deixará intactos.

Se isso já é ótimo para essa lista simples com três itens, imagine em uma aplicação real, onde teremos listas muito maiores com componentes bem mais complexos!

Por isso que utilizar o îndice do elemento no Array como chave é ruim, pois o índice muda conforme modificamos o Array, fazendo com que essas chaves não tenham serventia nenhuma para o React reconhecer um elemento.

``` javascript
<ul>
    <li key="0" >Maria</li>
    <li key="1" >João</li>
</ul>

<ul>
    <li key="0" >Karen</li>
    <li key="1" >Maria</li>
    <li key="2" >João</li>
</ul>
```

Veja que nesse exemplo estamos usando o índice dos elementos no Array. Eles acabaram ficando com a chave diferente. Maria antes tinha a chave 0 e agora está com a chave 1, fazendo o React reconhecer como um elemento diferente, o que o fará pensar que todos os elementos mudaram, tendo novamente que fazer três operações para atualizar os elementos.

Outro erro comum é utilizar números aleatórios, como os gerados por "Math.random()", como chave. Lembre-se que isso irá atrapalhar o funcionamento do React e prejudicando a performance da aplicação.


- Lista de Elementos
A maneira mais comum de se criar uma lista de elementos é usando o ".map()".
``` javascript
<ul>
    { minhaLista.map( pessoa => <li>{pessoa .nome} - {pessoa .idade} anos</li> ) }
</ul>
```
- Keys
Devemos criar chaves únicas para identificar cada elemento de uma lista.
``` javascript
<ul>
    { minhaLista.map( pessoa => <li key={pessoa.id} >{pessoa .nome} - {pessoa .idade} anos</li> ) }
</ul>
```
-Parâmetros de Funções
Podemos usar o ".bind()" para passar parâmetros para as funções
``` javascript
<ul>
    { minhaLista.map( pessoa => <li onClick={this.sayMyName.bind(this, pessoa)} key={pessoa.id} >{pessoa .nome} - {pessoa .idade} anos</li> ) }
</ul>
```
- Fragmentos
Podemos utilizar Fragmentos para retornar vários elementos de uma só vez sem precisar criar Arrays ou elementos adicionais que servirão de containers.
``` javascript
return <React.Fragment>
    <li key="0" >Karen</li>
    <li key="1" >Maria</li>
    <li key="2" >João</li>
</React.Fragment>
```
Também podemos escrever da forma simplificada:
``` javascript
return <>
    <li key="0" >Karen</li>
    <li key="1" >Maria</li>
    <li key="2" >João</li>
</>
```

- O que são Elementos Filhos?
Até o momento nós só criamos componentes e os utilizamos na raiz da aplicação. Mas podemos ir além disso, pois o React permite que a gente trabalhe facilmente com elementos filhos.

Elementos filhos são os elementos que vão dentro das tags de outro elemento.
``` javascript
<MeuComponente>
   <MeuTitulo />
</MeuComponente>
```
Até mesmo se você escrever um texto, esse texto será considerado filho do elemento no qual escrevemos.
``` javascript
<MeuComponente>
   Treinaweb
</MeuComponente>
```
Isso é muito útil quando queremos, por exemplo, permitir que parte de um componente tenha uma estrutura customizada. Ao invés de passar a estrutura do JSX por propriedade, passamos como elementos filhos entre as tags, deixando a aparência do código mais legível e similar ao HTML.

- Quando usar Refs?

Ao conhecer os "refs" pensamos que é algo ótimo e que deve ser usado a todo momento para facilitar o acesso de elementos e componentes. Porém, isso é um erro grave.

Ficar criando referências é algo custoso e consome memória. É muito mais simples, leve e até melhor para a manutenção e reutilização de código se você utilizar refs apenas em situações em que não há outra solução, como:

- - Executar "focus()" em um <input>;
- - Dar "play" ou "pause" em um <vídeo>;
- - Acessar o elemento <canvas> para desenhar;
- - Disparar animações imperativas;
- - Acessar elementos criados por uma outra biblioteca ou framework.

Fora essas situações, normalmente podemos evitar o uso de refs.

Por exemplo, ao invés de acessar o estado de um componente filho para alterar um dado dele, você pode passar dados ao filho pelas suas propriedades.

O elemento <dialog> do HTML exibe uma modal. Se você acessá-lo, poderá exibi-lo executando o método "showModal()" e escondê-lo executando "close()".

Porém, o <dialog> também pode ser controlado pelo atributo "open". Então é melhor criar uma variável no "state" para controlar o atributo "open" ao invés de criar um "ref" para executar "showModal()" e "close()".

- O que são Elementos Filhos?
Elementos que vão dentro da tag de um elemento.
``` javascript
<Pai>
   <Filho />
   <Filho />
</Pai>
```
- Acessando Elementos Filhos
Para acessar os elementos filhos de um componente acessamos "this.props.children".
Ao acessar um elemento filho podemos pegar o seu tipo pelo "type" e utilizar isso como se fosse uma tag. Assim poderemos modificar e adicionar propriedades.
``` javascript
{
   this.props.children.map(element => <element.type {...element.props} ></element.type>)
}
```
- Referências - Refs
Referências servem para acessarmos elementos ou componentes. Criamos referências com "React.createRef()" e passamos na propriedade "ref" de um elemento ou componente.
``` javascript
this.myRef = React.createRef();
<div ref={this.myRef} ></div>
```
Utilize refs apenas quando indispensável.

- Event Emitter
Podemos permitir a comunicação entre componentes com Event Emitters.
``` javascript
import Events from 'events'; // importa o "events" do Node.js
const Channel = new Events.EventEmitter(); // instancia um emissor de eventos
```
Comece a ouvir eventos com "Channel.on(‘nomeDoEvento’, função)". Inicie os eventos no "componentDidMount()".
Pare de ouvir os eventos com "Channel.removeListener(‘nomeDoEvento’, função)". Faça isso no "componentWillUnmount ()".
- Capturando Erros dos Filhos
Podemos capturar erros vindos dos componentes filhos com o método "componentDidCatch(error, info)"

-  O que são Portais?

Portais (Portals) nos permitem renderizar um elemento no lugar que quisermos, mesmo que este local esteja fora da nossa árvore de elementos ou fora da nossa aplicação React.

Um bom exemplo são os vídeos do Facebook. Quando estamos assistindo a um vídeo de um post e rolamos a página, um player flutuante com o nosso vídeo aparece, nos permitindo continuar assistindo o vídeo enquanto navegamos. O vídeo continua de onde parou.

Poderíamos fazer isso com os Portais do React.

Em qualquer situação em que você precise renderizar um componente em qualquer outro lugar, seja dentro ou fora da sua aplicação, criar um Portal é uma boa solução.

- O que são Portais?
Funcionalidade que nos permite renderizar componentes em qualquer lugar, mesmo fora da hierarquia de elementos ou aplicação React.

- Criando Portais
Execute "ReactDOM.createPortal()".
O primeiro parâmetro é o componente a ser renderizado e o segundo é o elemento que receberá o componente.

- O que é Contexto (Context)?
Quando aprendemos a criar elementos filhos, vimos que podemos passar propriedades ao elementos para compartilhar dados. Porém, isso pode ser trabalhoso caso a gente precise compartilhar um certo grupo de dados entre vários componentes ao redor de toda a nossa aplicação.

Contextos (context) nos permitem passar dados aos componentes sem precisar passá-los manualmente pelas propriedades de cada componente.

- Quando Usar Contextos?
Contextos foram criados para se compartilhar dados entre nossos componentes do React. Pense então nesses dados como dados globais, que podem ser acessados de qualquer lugar da aplicação.

Você pode, por exemplo, utilizar para compartilhar os dados do usuário logado ou alguma configuração que influencie o comportamento de vários componentes.

No primeiro momento pode parecer uma boa ideia deixar tudo global, mas pense bem onde utilizar. Fazer todos os seus componentes dependerem de dados vindos de um único local pode dificultar depois na reutilização.

- O que é Contexto?

Contexto (Context) nos permitem compartilhar dados entre componentes.

- Usando Contextos

Crie um contexto com "React.createContext()". Você pode passar como parâmetro um valor inicial padrão.

``` javascript
const MyContext = React.createContext();
```

A raiz da árvore de componentes que utilizarão esse contexto devem estar dentro de <MyContext.Provider>, o qual recebe uma propriedade "value" com os valores que serão passados aos componentes.

Os componentes que utilizarão o contexto devem receber este contexto em sua propriedade estática "contextType". Assim, em uma árvore com vários contextos, seu componente saberá de qual contexto pegar os dados.

- React DevTools

Pode ser difícil inspecionar alguns elementos, já que nosso código não é o mesmo que o navegador está interpretando.

Para facilitar o desenvolvimento foi criada uma extensão para os navegadores Chrome e Firefox para podermos analisar melhor as nossas aplicações.

Além de extensões para esses dois navegadores, também temos uma versão que roda diretamente do Node.js

Com ela podemos ver a árvore de componentes ao invés do HTML.

Ao clicar no componente também podemos ver suas propriedades e estados. Podemos também alterar o valor de um estado em tempo de execução, facilitando na hora de fazer um debug.

A React DevTools funciona tanto para React (aplicações web) quanto para React Native (aplicações mobile nativas).

- Instalando a React Devtools

Você pode instalar a extensão para Chrome ou Firefox nos seguintes links:

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/

- Abrindo a React DevTools nos navegadores

Para acessar a React DevTools nos navegadores Chrome e Firefox, basta abrir as ferramentas de desenvolvimento.

Aparecerá uma nova aba chamada "React".

Caso prefira não utilizar extensões ou está acostumado a trabalhar com outros navegadores, você pode optar pela ferramenta que roda diretamente do Node.js.

Ela também é útil para quando não estamos trabalhando em navegadores desktop, nos permitindo debugar código em navegadores mobile e até mesmo de aplicações feitas com React Native.

- Instalação do pacote do NPM

Você também pode usar a React DevTools diretamente do Node.js. Para instalar, abra seu terminal e execute o comando:

``` 
$ npm install -g react-devtools
```

Execute no terminal o comando "$ react-devtools" e insira no <head> da sua aplicação a seguinte tag:

``` html
<script src="http://localhost:8097"></script>
```

