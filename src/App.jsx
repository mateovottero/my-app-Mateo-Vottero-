import Navbar from './componentes/Navbar';
import ListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemListContainer';

function App() {

  return <>
  <Navbar/>;
  <ListContainer
    title="bienvenido a calculo a Mendoza Gaming"
    subTitle="No te dejes ganar por culpa de accesorios"
  />
  {/* <ItemCount otrotitulo={otrotitulo} ValorInicial={0} stock={9}/> */}
  </>


}

export default App