import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>

    <NavBar />
    <ItemListContainer greeting="Bienvenidos y disfruten de Burger Arg" />

    </>
  );
}

export default App;
