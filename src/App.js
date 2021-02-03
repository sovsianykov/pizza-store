import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch }  from 'react-redux';

import {Header} from "./scss/components";
import {Home,Cart} from "./pages";
import {Route} from "react-router-dom";
import {setPizzas } from './redux/actions/pizzas';
import store  from './redux/store'

function App() {
    const dispatch = useDispatch();
    const {items} = useSelector(({pizzas, filters}) => {
        return {
            items: pizzas.items,
            sortBy: filters.sortBy,

        }
    })


    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) =>{
               dispatch(setPizzas(data.pizzas))
            })
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


// const mapStateToProps = (state) =>{
//     return {
//         items: state.pizzas.items,
//         filters: state.filters
//     }
// }
// const mapDispathToProps = dispath => {
//     return {
//         setPizzas: (items) =>dispath(setPizzasAction(items)),
//         dispath
//     }
//
// }
// export default connect(mapStateToProps,mapDispathToProps)(App);
export default App;
