import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { loginUserReducer, registerUserReducer, updatePasswordReducer } from './reducers/userReducer';
import { thunk } from 'redux-thunk';
// import { chatCreateReducer, getAllChatReducer } from './reducers/chatReducer';


// const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem('currentUser')) : null;
// const allchats = localStorage.getItem("allchats") ? JSON.parse(localStorage.getItem('allchats')) : null;


const rootReducer = combineReducers({
    // loginUserReducer: loginUserReducer,
    // registerUserReducer: registerUserReducer,
    // updatePasswordReducer: updatePasswordReducer,
    // chatCreateReducer: chatCreateReducer,
    // getAllChatReducer: getAllChatReducer
});


const initialState = {
    // loginUserReducer: {
    //     currentUser: currentUser,

    // },

};


const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    composeenhancers(applyMiddleware(...middleware))
);
export default store;