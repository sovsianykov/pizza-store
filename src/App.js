import React from 'react';
import axios from 'axios';
import { connect}  from 'react-redux'

import {Header} from "./scss/components";
import {Home,Cart} from "./pages";
import {Route} from "react-router-dom";
import {setPizzas as setPizzasAction } from './redux/actions/pizzas';
import store  from './redux/store'





class App extends React.Component {

    componentDidMount() {

        axios.get('http://localhost:3000/db.json').then(({data}) =>{this.props.dispath(setPizzasAction(data.pizzas))
        })

    }


    render ()  {
    return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render ={()=> <Home items={this.props.items}/>}/>
                    <Route exact   path='/cart' component={Cart}/>
                </div>
            </div>
        );

 }
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
