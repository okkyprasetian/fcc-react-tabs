import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Header from './components/Header'
import Nav from './components/Nav'
import Info from './components/Info'

function App() {

  // State 
  const [jobs, setJobs] = useState([])

  // Set State


  // Fetch Data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://course-api.com/react-tabs-project')
      const data = await response.json()

      return data
    }

    getData().then(data => setJobs(data))
  }, [])

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
  )
}

export default App;
