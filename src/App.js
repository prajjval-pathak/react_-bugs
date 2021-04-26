
import Form from './components/Form'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import FormLogin from './components/loginStudent';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/navBar';
import AddExperience from './components/forms/add-experience';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/'>
  
          <Landing/>
          </Route>
          <Route exact path='/signup'>
          <Navbar/>
            <Form/>
          </Route>
          <Route path="/login_Student">
            <FormLogin/>
            </Route>
            <Route path="/add-experience">
            <AddExperience/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
