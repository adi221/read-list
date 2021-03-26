import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Alert from './components/Alert/Alert';
import Form from './components/Form/Form';

const getLocalStorage = () => {
  let list = localStorage.getItem('book-list');
  if (list) {
    return JSON.parse(localStorage.getItem('book-list'));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });

  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      // Show alert
      showAlert(true, 'danger', 'Please enter value');
    } else if (name && isEditing) {
      // Deal with editing
      setList(
        list.map(book => {
          if (book.id === editId) {
            return { ...book, title: name };
          }
          return book;
        })
      );
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'item editted successfully');
    } else {
      // Add item to list, show alert success
      showAlert(true, 'success', 'book added');
      const newBook = { id: new Date().getTime().toString(), title: name };
      setList([...list, newBook]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    if (isEditing) return;
    setAlert({ show, type, msg });
  };

  const deleteItem = id => {
    if (isEditing) return;
    showAlert(true, 'success', 'Item deleted');
    const newList = list.filter(book => book.id !== id);
    setList(newList);
  };

  const editItem = id => {
    if (isEditing) return;
    showAlert(true, 'success', 'Edit your book please');
    const specificBook = list.find(book => book.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificBook.title);
    inputRef.current.focus();
  };

  const clearList = () => {
    if (isEditing) return;
    showAlert(true, 'success', 'List cleared successfully');
    setList([]);
  };

  useEffect(() => {
    localStorage.setItem('book-list', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='container'>
      <Header clearList={clearList} />
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <List
        books={list}
        deleteItem={deleteItem}
        editItem={editItem}
        editId={editId}
      />
      <Form
        submitted={handleSubmit}
        name={name}
        setName={e => setName(e.target.value)}
        inputRef={inputRef}
      />
    </div>
  );
}

export default App;
