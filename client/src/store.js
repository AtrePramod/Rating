import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; import { thunk } from 'redux-thunk';
import { getProductReducer } from './reducers/productReducers';
import { getAllRating, registerRatingReducer } from './reducers/ratingReducers';



const rootReducer = combineReducers({
    getProductReducer: getProductReducer,
    registerRatingReducer: registerRatingReducer,
    getAllRating: getAllRating

});


const initialState = {



};


const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    composeenhancers(applyMiddleware(...middleware))
);
export default store;