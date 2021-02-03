import React from 'react';
import axios from 'axios';
import { connect}  from 'react-redux'

import {Header} from "./scss/components";
import {Home,Cart} from "./pages";
import {Route} from "react-router-dom";
import {setPizzas as setPizzasAction } from './redux/actions/pizzas';
import store  from './redux/store'

function App({setPizzas, items}) {
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) =>{setPizzas(data.pizzas)})
    },[]);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render ={()=> <Home items={items}/>}/>
                <Route exact   path='/cart' component={Cart}/>
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
}
const mapDispathToProps = dispath => {
    return {
        setPizzas: (items) =>dispath(setPizzasAction(items)),
        dispath
    }

}
export default connect(mapStateToProps,mapDispathToProps)(App);
