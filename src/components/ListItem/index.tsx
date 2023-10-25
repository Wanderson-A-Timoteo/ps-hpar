import { Item } from "../types/Item";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void
}

export const ListItem = ({item} : Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <div className="flex justify-between rounded-xl mb-2 p-3 bg-gray-800">
      <div
          className=""
          done={isChecked}
      >
        <input 
          className="w-5 h-5 mr-2 align-middle hover:cursor-pointer"
          type="checkbox" 
          checked={isChecked} 
          onChange={e => setIsChecked(e.target.checked)}
        />
        <label className="text-gray-300" > { item.name } </label>
      </div>
      <div className="flex gap-3">
        <div className="hover:cursor-pointer hover:text-green-300"> <FontAwesomeIcon icon={faPenToSquare} /> </div>
        <div className="hover:cursor-pointer hover:text-red-300"> <FontAwesomeIcon icon={faTrashCan} /> </div>
      </div>
    </div>
  );
}
