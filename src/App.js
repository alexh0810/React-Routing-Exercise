import logo from './logo.svg';
import './App.css';
import { BrowserRouter,
Switch,
Route,
Link } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div class="header">
        <h1>Welcome to React Router</h1>
      </div>
      <div class="App-link">
      <div>
      <Link to="/">Home</Link>{''}
      </div>
      <div> 
      <Link to="/about">About</Link>{''}
      </div>
      <div>
      <Link to="/contact">Contact</Link>{''}
      </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route render={() => <h1> Page not found </h1>}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
