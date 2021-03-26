import React from 'react';
import Book from './Book';

const List = ({ books, deleteItem, editItem, editId }) => {
  return (
    <div className='content'>
      {books.length === 0 && (
        <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>
          The List is Empty! Add the books you want to read{' '}
        </h2>
      )}
      <ul className='list'>
        {books.map(book => {
          return (
            <Book
              key={book.id}
              {...book}
              del={() => deleteItem(book.id)}
              edit={() => editItem(book.id)}
              editId={editId}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
