import { useState, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter } : Props) => {

  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e : KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }
  return (
    <div className='flex align-middle rounded-2xl p-3 my-5 text-gray-50 border-solid border-[1px]'>
      <div className="w-7 mr-2 text-gray-400"> <FontAwesomeIcon icon={faPlus} /></div>
      <input
        className='flex-1 border-none bg-transparent text-lg text-gray-50 outline-none' 
        type="text" 
        placeholder='Adicione uma tarefa' 
        value={inputText}
        onChange={e => setInputText(e.target.value)}  
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}