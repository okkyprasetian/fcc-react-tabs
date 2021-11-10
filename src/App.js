import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Header from './components/Header'
import Nav from './components/Nav'
import Info from './components/Info'

function App() {

  // State 
  const [jobs, setJobs] = useState([])
  const [showJobs, setShowJobs] = useState([])
  const [loading, setLoading] = useState(true)

  // Set State


  // Fetch Data
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://course-api.com/react-tabs-project')
      const data = await response.json()

      setJobs(data)
      setShowJobs(data[0])
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <div className="App">
      {loading ? <Loading /> :
        <main className="main">
          <Header />
          <Nav />
          <Info showJobs={showJobs} />
        </main>
      }
    </div>
  )
}

export default App;
