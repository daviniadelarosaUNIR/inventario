//import logo from './logo.svg';
import '../App.css';
import { Action } from '../components/Action';
import useRedirection from '../hooks/useRedirection';

function Home() {

  useRedirection("/inventory", 3000); // Redireccionamos a la vista de restaurantes en 3 segundos
  return (
    <div>
      <Action text="Acceder Inventario" path="/inventory" delay={3000} />
      <Action text="Acceder Información Proveedores" path="/providers" delay={3000} />
    </div>
  );
}
export default Home;
