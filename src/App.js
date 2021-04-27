import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
