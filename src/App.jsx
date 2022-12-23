import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Welcome from './Components/Welcome/Welcome'
import ErrorPage from './Pages/ErrorPage'
import SharedHomePage from './Pages/SharedHomePage'
import TopRatedMovies from './Components/TopRated/TopRatedMovies'
import SharedSingleMoviePage from './Pages/SharedSingleMoviePage'
import SingleMovie from './Components/SingleMovie/SingleMovie'
function App() {
  const [movieData, setmovieData] = useState([]);
  const [searchText, setSearchText] = useState('')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedHomePage />}>
          <Route index element={<Welcome setSearchText={setSearchText} searchText={searchText} movieData={movieData} setmovieData={setmovieData}/>} />
          <Route path='movies' element={<SharedSingleMoviePage/>}>
            <Route path=':id' element={<SingleMovie movieData={movieData}/>}/>
          </Route>
          <Route path='topRated' element={<TopRatedMovies/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
