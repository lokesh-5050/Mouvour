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
  const [tvData, setTvData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loader, setLoader] = useState(true)
  const [suggestions, setSuggestions] = useState([])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedHomePage />}>
          <Route index element={<Welcome forMovies="Movies" setSearchText={setSearchText} searchText={searchText} movieData={movieData} setmovieData={setmovieData} loader={loader} setLoader={setLoader} suggestions={suggestions}  setSuggestions={setSuggestions}/>} />
          <Route path='movies' element={<SharedMoviesPage />}>
            <Route path='search/:id' element={<SingleMovie goTohome="/" />} />
            <Route path='similar/:id' element={<SingleMovie goTohome="/" />} />
            <Route path='toprated' element={<TopRatedMovies toprated="toprated" loader={loader} setLoader={setLoader} />} />
            <Route path='toprated/:id' element={<SingleMovie goToTopRated="/movies/toprated" />} />
            <Route path='upcoming' element={<UpcomingMovies loader={loader} upcoming="upcoming" setLoader={setLoader} />} />
            <Route path='upcoming/:id' element={<SingleMovie goToUpcoming="/movies/upcoming"/>} />
            <Route path='discover' element={<DiscoverMovies loader={loader} discover="discover" setLoader={setLoader} />} />
            <Route path='discover/:id' element={<SingleMovie goToDiscover="/movies/discover" />} />
          </Route>
          <Route path='tv' element={<SharedMoviesPage/>}>
            <Route index element={<Welcome forTv="Tv Shows" setSearchText={setSearchText} searchText={searchText} movieData={tvData} setmovieData={setTvData} loader={loader} setLoader={setLoader} suggestions={suggestions}  setSuggestions={setSuggestions}/>}/>
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
