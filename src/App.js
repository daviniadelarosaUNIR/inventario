//import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Table from './components/Table';

function App() {
  const tableData = [
    ['Dato1', 'Dato2', 'Dato3'],
    ['Dato4', 'Dato5', 'Dato6'],
    ['Rita', 'Carlos', 'Francisco'],
    // Agregar más filas según sea necesario
  ];
  return (
    <div className="App">
      <Header />
      <Table rows={tableData} />
      <Footer />
    </div>
  );
}

export default App;
