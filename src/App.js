import { useState } from 'react'
import Loading from './components/Loading'
import Header from './components/Header'
import Nav from './components/Nav'
import Info from './components/Info'

function App() {

  // State 
  const [data, setData] = useState([])

  return (
    <div className="App">
      {false ? <Loading /> :
        <main className="main">
          <Header />
          <Nav />
          <Info />
        </main>
      }
    </div>
  );
}

export default App;
