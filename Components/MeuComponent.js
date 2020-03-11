import React, { Component } from 'react';

export function HelloComponent() {
    return (
        <div>
            Hello
        </div>
    )
}

export const TitleComponent = () => {
    return <h1>TreinaWeb</h1>
}

export const MeusComponentes = {
    TreinaWeb: (props) => {
        return <h1>Olá {props.nome}!</h1>
    }
}

class MeuComponent extends Component {
    render() {
        const { titulo, nome, sobrenome, idade } = this.props;
        return(
            <>
                <h2>Componente com classe: Olá, {titulo}</h2>
                <div>
                    <ul>
                        <li>Nome: {nome}</li>
                        <li>Sobrenome: {sobrenome}</li>
                        <li>Idade: {idade}</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default MeuComponent;


// import React from 'react';
// import MeuComponent, { HelloComponent, TitleComponent, MeusComponentes } from './components/MeuComponent';

// function App() {
//   const nome = 'TreinaWeb';
//   const MeuComponenteEscolhido = MeusComponentes[nome];
//   return (
//     <div>
//       <TitleComponent/>
//       <HelloComponent/>
//       <MeuComponent/>
//       <MeusComponentes.TreinaWeb/>
//       <MeuComponenteEscolhido/>
//       <MeusComponentes.TreinaWeb nome="Valchan"/>
//       <MeuComponent nome="Web Developer!"/>
//     </div>
//   );
// }


// function App() {
//     const dados = {
//       nome: 'Maria',
//       sobrenome: 'Souza',
//       idade: 25
//     }
//     return (
//       <div>
//         <MeusComponentes.TreinaWeb nome="Valchan"/>
//         <MeuComponent titulo="Web Developer!" {...dados}/>
//       </div>
//     );
//   }

// export default App;
