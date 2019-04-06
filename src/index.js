import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


// const reviewReducer = (state = [], action) => {
//    if (action.type === 'ADD_FEELING') {
//       return [...state, {feeling: action.payload}];
//    } else if (action.type === 'ADD_UNDERSTANDING') {
//       return [...state, {understanding: action.payload}];
//    } else if (action.type === 'ADD_SUPPORT') {
//       return action.payload;
//    } else if (action.type === 'ADD_COMMENTS') {
//       return action.payload;
//    } 
//    return state;
// }



const feelingsReducer = (state = [], action) => {
   if (action.type === 'ADD_FEELING') {
       return action.payload
   }
   return state;
}

const understandingReducer = (state = [], action) => {
   if (action.type === 'ADD_UNDERSTANDING') {
       return action.payload
   }
   return state;
}

const supportedReducer = (state = [], action) => {
   if (action.type === 'ADD_SUPPORT') {
       return action.payload
   }
   return state;
}

const commentsReducer = (state = [], action) => {
   if (action.type === 'ADD_COMMENT') {
       return action.payload
   }
   return state;
}

const reviewComplete = (state = true, action) => {
   if (action.payload === false) {
      return state = action.payload;
   }
   return state;
}

const getFeedback = (state = [], action) => {
   if(action.type === 'GET_FEEDBACK') {
      return state = action.payload;
   }
   return state;
}

const deleteFeedback = (state = null, action) => {
   if (action.type === 'DELETE_FEEDBACK') {
      return state = action.payload;
   }
   return state;
}

const storeInstance = createStore(
   combineReducers({
       feelingsReducer,
       understandingReducer,
       supportedReducer,
       commentsReducer,
       reviewComplete,
       getFeedback,
       deleteFeedback,
   }),
   applyMiddleware(logger),
)

ReactDOM.render(
    <Provider store={storeInstance}>
       <App />
    </Provider>,
    document.getElementById('root')
 );
 
registerServiceWorker();
