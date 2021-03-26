import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { BiCheckCircle, BiCircle } from 'react-icons/bi';

const Book = ({ id, title, del, edit, editId }) => {
  const [checked, setChecked] = useState(false);

  return (
    <li className={`list-item ${editId === id && 'is-editing'} `}>
      <div className='left'>
        {checked ? (
          <BiCheckCircle
            className='icon-item checked'
            onClick={() => setChecked(!checked)}
          />
        ) : (
          <BiCircle
            className='icon-item check'
            onClick={() => setChecked(!checked)}
          />
        )}
        <p className={checked && 'line-through'}>{title}</p>
      </div>
      <div className='right'>
        {checked || <FaEdit className='icon-item edit' onClick={edit} />}
        <FaTrashAlt className='icon-item delete' onClick={del} />
      </div>
    </li>
  );
};

export default Book;
