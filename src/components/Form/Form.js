import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const Form = ({ submitted, name, setName, inputRef }) => {
  return (
    <div className='add-book'>
      <form className='form' onSubmit={submitted}>
        <button type='submit'>
          <FaPlusCircle className='icon-add' />
        </button>
        <input
          type='text'
          placeholder='Add your to-read book'
          value={name}
          onChange={setName}
          ref={inputRef}
        />
      </form>
    </div>
  );
};

export default Form;
