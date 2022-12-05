import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Services/stateService';
import { BrowserRouter } from 'react-router-dom';
// document.getElementById: berjot html element s id root iz DOM (Document Object Model).
// DOM eto vsja struktura html v objekte
// DOM hranitsja v globalnoj peremennoj kotoraja nazyvaetsja 'document'

// ReactDOM eto vspomogatelnyj paket Reacta dlja voimodejstvija s DOM
// createRoot sozdajot glavnuju deriktoriju gde budet zapuskatsja vsjo nashe prilozenie
const root = ReactDOM.createRoot(document.getElementById('root'));
// render = eto funkcija otrisovki React komponentov.
// otrisovka zna4it obrabotka komponenta i pervodit iz JSX ili React element v 4istyi DOM (pokazyvaetsja na brauzere) 
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);


