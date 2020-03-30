import React from 'react'
import router from './router'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import logo from './assets/images/logo.svg'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>{renderRoutes(router, {})}</BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
