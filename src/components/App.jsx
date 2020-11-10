import React from 'react';
import { useSelector } from 'react-redux';
import Filters from './Filters/';
import Modal from './Modal/';
import TicketsList from './TicketsList/';
import logoImg from '../assets/logo.png'

const App = () => {
  const isShowModal = useSelector(state => state.isShowModal);

  return (
    <div className='main-content'>
      <header>
        <img src={logoImg} alt='logo' />
        <h1>Aviasales</h1>
      </header>
      <main>
        {isShowModal && <Modal />}
        <Filters />
        <TicketsList />
      </main>
    </div>
  );
};

export default App;
