
import { useState } from 'react';
import { Item } from './components/types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    	<div className='Container min-h-screen text-gray-50 '>
        <div className='m-auto max-w-4xl p-3'>
          <div className='m-0 py-5 text-gray-50 text-center text-3xl'>Lista de Tarefas</div>
          <AddArea onEnter={handleAddTask} />
          {list.map((item, index)=>(
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
            />
          ))}
        </div>
      </div>
  );
}

export default App;