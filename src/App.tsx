import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

export const App = () => {  
  return (
    <div className='Container min-h-screen text-gray-50 '>
      <div className='m-auto max-w-4xl p-3'>
        <div className='m-0 py-5 text-gray-50 text-center text-3xl'>Lista de Tarefas</div>
        <AddArea />
        
          <ListItem />
      </div>
    </div>
  );
}
