 import { useState } from 'react';
 import * as C from './App.styles';
//import { Container } from "./App.styles";
import { Item } from './types/Item'; 

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id : 1, name: 'comprar pão', done: false},
    { id : 2, name: 'comprar leite', done: false}
  ])
    
  return (
      <C.Container>
          <C.Area>
            <C.Header>Lista de Tarefas</C.Header>

          {/* Área de adicionar nova tarefa */}


          {/* Lista de tarefas*/}
          {list.map((item, index) => (
            <div>
                {item.name}
            </div>
          ))}

          </C.Area>
      </C.Container>
    );
}

export default App;
