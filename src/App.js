import React from 'react';
import './App.css';
import Modal from './Components/Modal';
import ModalProvider from './Contexts/ModalProvider';

// Boilerplate from youtube.com/watch?v=4x0lQu1TOCQ
/**
 * @return {null}
 */
function App() {
  return (
    <ModalProvider>
      <Modal />
    </ModalProvider>
  );
}

export default App;
