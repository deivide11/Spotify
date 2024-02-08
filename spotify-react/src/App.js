import './App.css';
import Sidebar from '../src/componentes/Header/Header';
import Header from '../src/componentes/Sidebar/Sidebar';
import Main from '../src/componentes/Main/Main';
import Footer from '../src/componentes/Footer/Footer';


function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
