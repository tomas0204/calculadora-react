import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import TipCalculator from './components/TipCalculator/TipCalculator'

function App() {

  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-center">
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
