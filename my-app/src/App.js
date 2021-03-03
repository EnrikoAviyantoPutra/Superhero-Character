import React from 'react'
import Home from './views/Home'
import Detail from './views/Details'
import Favorite from './views/Favorite'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <div>
      <Navbar />


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <div>

      {/* <Home /> */}
    </div>
</>

  )
  // function Home() {
  //   return <h2>Home</h2>;
  // }
  
  // function Detail() {
  //   return <h2>Detail</h2>;
  // }
  
}

export default App