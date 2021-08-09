import './App.css';
import Proyectos from './components/Proyectos'
import Instrumentos from './components/Instrumentos'
import Bands from './components/Bands'
import Home from './components/Home';
import NotFound from './components/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import ProyectoState from './context/proyectos/ProyectoState'
import InstrumentoState from './context/instrumentos/InstrumentoState'
import BandState from './context/bands/BandState'

function App() {
  return (
    <>
      <ProyectoState>
      <InstrumentoState>
      <BandState>
        <Router>
          <Switch>
            <Route exact path="/instrumentos" component={Instrumentos} />
            <Route exact path="/proyectos" component={Proyectos} />
            <Route exact path="/bands" component={Bands} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </BandState>
      </InstrumentoState>
      </ProyectoState>
    </>
  );
}

export default App;
