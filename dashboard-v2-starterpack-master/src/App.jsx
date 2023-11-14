import {BrowserRouter, Router, Routers} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
    <Routers>
      <Router path="/" element={<Layout/>}>

      <Router path="dashboard" element={<Dashboard/>}/>

      </Router>
    </Routers>
    </BrowserRouter>
  </div>
};

export default App;
