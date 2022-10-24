import './App.css';
import Layout from './components/Layout';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Details from './components/movieapp/Details';

function App() {
  return (
    <>
      <Router>
        <Route path="/details:id" render={props => (
          <Details {...props} />
        )}>
        </Route>
        <Route path="//">
          <Layout />
        </Route>
      </Router>
      
    </>
  );
}

export default App;
