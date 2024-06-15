import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NanoMetas</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} nano-metas cumpridas!
        </button>
        <p>
          Defina <code>pequenas_metas</code> e atinja <strong>grandes</strong> resultados!
        </p>
      </div>
      <p className="read-the-docs">
        ...em moroso processo de desenvolvimento...
      </p>
    </>
  )
}

export default App
