import React, { useState, useEffect } from 'react'
import Header from './Header'
import About from './About'
import Service from './Service'
import Resume from './Resume'
import Banner from './Banner'
import Blog from './Blog'
import Footer from './Footer'
import Loader from './Loader'


function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {loading ? <Loader /> : <>
        <Header />
        <About />
        <Service />
        <Resume />
        <Banner />
        <Blog />
        <Footer />
      </>}
    </>
  )
}
export default App
