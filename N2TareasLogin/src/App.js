import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Componentes/autentificacion/Login';
import Cuenta from './Componentes/autentificacion/Cuenta';
import Proyectos from './Componentes/proyectos/Proyectos'; 
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {Login}/>
          <Route exact path = "/cuenta" component = {Cuenta}/>
          <Route exact path = "/proyectos" component = {Proyectos}/> 
        </Switch>
      </Router>
  );
}
export default App;
