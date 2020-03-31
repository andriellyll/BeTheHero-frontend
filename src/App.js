import React from 'react';

import Routes from './routes';

import './global.css';

// Propriedades: atributos repassados para componentes (mesma sintaxe dos atributos em HTML)
// Estado: Informação que vai ser mantida pelo Componente
//      Se para armazenar essa informação, for utilizado uma variável, qualquer mudança que 
//      ocorrer nela não será refletido na página, pois o componente não renderiza toda vez 
//      ela muda. Diferentemente do estado, em que essa renderização acontece toda vez em 
//      que ele é alterado.
// Nao é permitido alterar o valor do estado de maneira direta, isso é feito atraves do SetState
// useState => array [variavelQArmazenaOValor, funcaoDeAtualizacao]
function App() {
  return (
    <Routes/>
  );
}

export default App;
