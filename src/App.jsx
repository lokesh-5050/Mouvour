import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Welcome from './Components/Welcome/Welcome'
import ErrorPage from './Pages/ErrorPage'
import SharedHomePage from './Pages/SharedHomePage'
import TopRatedMovies from './Components/TopRated/TopRatedMovies'
import SharedSingleMoviePage from './Pages/SharedSingleMoviePage'
import SingleMovie from './Components/SingleMovie/SingleMovie'
import SharedTopRatedMoviePage from './Pages/SharedTopRatedMoviePage'
function App() {
  const [movieData, setmovieData] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [loader, setLoader] = useState(true)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedHomePage />}>
          <Route index element={<Welcome setSearchText={setSearchText} searchText={searchText} movieData={movieData} setmovieData={setmovieData} loader={loader} setLoader={setLoader}  />} />
          <Route path='movies' element={<SharedSingleMoviePage/>}>
            <Route path=':id' element={<SingleMovie />}/>
          </Route>
          <Route path='topRated/movies' element={<SharedTopRatedMoviePage/>}>
            <Route index element={<TopRatedMovies movieData={movieData} setmovieData={setmovieData}/>}/>
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
