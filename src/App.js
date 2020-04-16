//redux-esste responsabil pentru datele noatre(storing, updating)
//react-redux- este responsabil pentru conectarea aplicatiei la redux
//createStore-fomare store
//store comunica direct cu reducer, care este o functie ce are rolul de face un updata valorilor din store


import React from 'react';
import Counter from './Counter'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import countReducer from './CountReducer'
import productReducer from './ProductReducer'
import Products from './Products'
import modalReducer from './ModalReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Modal from './Modal'

const middleware=[thunk]

//components






//setup store
const store=createStore(combineReducers({
  countState: countReducer,
  modalState: modalReducer,
  productState:productReducer
}),composeWithDevTools(applyMiddleware(...middleware)))

function App() {
  return (
    <Provider store={store}>
      <Counter/>
      <Modal/>
      <Products/>
    </Provider>
  );
}

export default App;
