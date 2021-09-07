import  React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SecondHome } from './pages/SecondHome';


function App() {
  return (
   <BrowserRouter>
    <Navbar />

     <div className="container pt-4">
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/second'} component={SecondHome} />
        </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
