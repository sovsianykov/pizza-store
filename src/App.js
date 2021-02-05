import React from 'react';
import { useSelector, useDispatch }  from 'react-redux';

import {Header} from "./scss/components";
import {Home,Cart} from "./pages";
import {Route} from "react-router-dom";
import {fetchPizzas } from './redux/actions/pizzas';
import store  from './redux/store'

function App() {
    const dispatch = useDispatch();
    const { items } = useSelector(({pizzas}) => {
        return {
            items: pizzas.items,

        }
    })


    React.useEffect(() => {
        console.log(dispatch(fetchPizzas()))

    },[]);

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
