import FormRemitos from './components/views/remitos/FormRemitos.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TablaTrabajos from './components/views/tablaResumen/TablaTrabajos.jsx';

function App() {

  return(
    <>
    <TablaTrabajos />
    <hr />
    <FormRemitos />
    </>
    )
}

export default App
