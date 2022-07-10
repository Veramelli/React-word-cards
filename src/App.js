import './App.css';
import Header from './Header/Header';
import WordCard from './WordCard/WordCard';
import CardList from './CardList/CardList';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <WordCard/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
