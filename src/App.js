import React from 'react';
import s from './App.css'
import Header from './Header/Header';
import WordCard from './WordCard/WordCard';
import CardList from './CardList/CardList';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <WordCard/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
