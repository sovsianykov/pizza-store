import {createStore, copmose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';import {  useDispatch }  from 'react-redux';



import rootReducer from './reducers';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__|| compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );


export default store;
