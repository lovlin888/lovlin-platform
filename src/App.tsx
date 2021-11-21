import React from 'react'
import './assets/css/App.css'
import { HashRouter } from 'react-router-dom'
import {renderRoutes  } from 'react-router-config'
import routes from './routers/index';

function App() {
  return (
    <div className="App">
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    </div>
  );
}

export default App
