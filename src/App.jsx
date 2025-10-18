import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import TipCalculator from './components/TipCalculator/TipCalculator'

function App() {

  

  return (
    <>
      <div className="container">
        <h1 className="text-center">Calculadora de Propinas</h1>
        <div classNames="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <TipCalculator></TipCalculator>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
