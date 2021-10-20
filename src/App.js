import  React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import "./css/main.css"
import { award } from './pages/award';
import { blog } from './pages/blog';
import { blog_single } from './pages/blog-single';
import { Contact } from './pages/contact';

import './css/bootstrap.min.css'    
import './css/all.min.css'  
import './css/animate.css'  
import './css/magnific-popup.css'  
import './css/owl.min.css'
import './css/flaticon.css'  
import './css/odometer.css'

import { Home } from './pages/Home';
import { SecondHome } from './pages/SecondHome';


function App() {
  return (
   <BrowserRouter>

     <div className="container pt-4">
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/home'} component={SecondHome} />
            <Route path={'/award'} component={award}/>
            <Route path={'/blog?single'} component={blog_single}/>
            <Route path={'/blog'} component={blog}/>
            <Route path={'/contact'} component={Contact}/>
  
        </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
