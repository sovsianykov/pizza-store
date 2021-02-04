import React from 'react';
import { useSelector,useDispatch}  from 'react-redux';

import {Header} from "./scss/components";
import {Home , Cart} from "./pages";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component ={Home} />
                <Route exact   path='/cart' component={Cart}/>
            </div>
        </div>
    )
}
export default App;
