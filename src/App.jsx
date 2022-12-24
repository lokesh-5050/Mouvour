import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Welcome from './Components/Welcome/Welcome'
import ErrorPage from './Pages/ErrorPage'
import SharedHomePage from './Pages/SharedHomePage'
import TopRatedMovies from './Components/MoviesSections/TopRatedMovies'
import SingleMovie from './Components/SingleMovie/SingleMovie'
import SharedMoviesPage from './Pages/SharedMoviesPage'
import UpcomingMovies from './Components/MoviesSections/UpcomingMovies'
import DiscoverMovies from './Components/MoviesSections/DiscoverMovies'
function App() {
  const [movieData, setmovieData] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [loader, setLoader] = useState(true)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedHomePage />}>
          <Route index element={<Welcome setSearchText={setSearchText} searchText={searchText} movieData={movieData} setmovieData={setmovieData} loader={loader} setLoader={setLoader} />} />
          <Route path='movies' element={<SharedMoviesPage />}>
            <Route path='search/:id' element={<SingleMovie />} />
            <Route path='toprated' element={<TopRatedMovies toprated="toprated" loader={loader} setLoader={setLoader} />} />
            <Route path='toprated/:id' element={<SingleMovie />} />
            <Route path='upcoming' element={<UpcomingMovies loader={loader} upcoming="upcoming" setLoader={setLoader} />} />
            <Route path='discover' element={<DiscoverMovies loader={loader} discover="discover" setLoader={setLoader} />} />

          </Route>
          {/* <Route path='movies/toprated' element={<SharedTopRatedMoviePage />}>
            
          </Route> */}
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
