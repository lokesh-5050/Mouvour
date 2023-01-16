import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Welcome/Welcome.css';
import Axios from 'axios'
import { DotSpinner, DotWave } from '@uiball/loaders'
import { Link } from 'react-router-dom';
import Movie from '../MovieCard/Movie';
import { PageProvider } from '../../context/PageContext'
import axios from 'axios';
const Welcome = ({ setSearchText, searchText, movieData, setmovieData, loader, setLoader, suggestions, setSuggestions }) => {
  const [page, setPage] = useContext(PageProvider);
  const [showingDataFor, setShowingDataFor] = useState('')
  const inputMovieRef = useRef(null)
  const formSubmtBtn = useRef(null)
  const [getNowPlayingMovies, setGetNowPlayingMovies] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault();
    setSuggestions([])
    console.log(searchText);
    setShowingDataFor(inputMovieRef.current.value)
    if (!movieData.length) {
      console.log("no length");
      // showMovies = <DotWave />
    }
    let query = inputMovieRef.current.value;
    setLoader(true)
    const { data } = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d978e8b4d35276a656ae12c2c4892803&query=${query}`)

    const { results } = data
    console.log(results);
    setmovieData(results);
    setLoader(false)
    setSearchText('')


  }

  const fetchNowPlayingMovies = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&page=${page}`)
    let { results } = data;
    setGetNowPlayingMovies(results)
  }

  useEffect((e) => {
    fetchNowPlayingMovies()
  }, [page])


  console.log(movieData);


  // var showMovies = movieData.map((e, i) => (
  //   <Link to={`/movies/${e.id}`} key={e.id}>
  //   <div className="movie_slot"  key={e.id}>
  //     <div className="poster">
  //       <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} style={{ width: "14vw" }} alt="image" />
  //     </div>
  //     <h4 className='container l-3 mt-2 title'>{e.original_title}</h4>
  //     <h6 className='container l-3'>{e.release_date}</h6>
  //     {/* rating animated circle/svg */}
  //     <svg viewBox="0 0 36 36" className="circular-chart" >
  //       <path className="circle"
  //         strokeDasharray={`${e.vote_average * 10} , 100`}
  //         d="M18 2.0845
  //                   a 15.9155 15.9155 0 0 1 0 31.831
  //                   a 15.9155 15.9155 0 0 1 0 -31.831"
  //       />
  //       <text x="7.5" y="23" fontSize={"11px"}>{(e.vote_average) * 10}%</text>
  //     </svg>
  //   </div>
  //   </Link>
  // ))

  const delayedSuggestion = async () => {
    let query = searchText;
    const { data } = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d978e8b4d35276a656ae12c2c4892803&query=${query}`)
    const { results } = data
    setSuggestions(results)

  }

  const onTypeSearchMovie = async (e) => {
    setSearchText(e.target.value)
    // console.log(inputMovieRef.current.value.length);
    if (inputMovieRef.current.value.length > 2) {
      setTimeout(() => {
        delayedSuggestion()
      }, 100);
    } else if (inputMovieRef.current.value.length == 0) {
      setSuggestions([])
    }


  }

  const searchBySuggestion = async (f) => {
    console.log(inputMovieRef.current.value);
    inputMovieRef.current.value = f.target.innerHTML
    console.log(searchText);
    console.log(inputMovieRef.current.value);
    handleSearch(f)
  }


  return (
    <>

      <div className="container" style={{ position: 'relative', top: '1vw' }}>
        <div className="container title_Welcome text-center w-50">
          <h3>Welcome To Mouvour</h3>
          <h6 >Search for Movies and see Their Reviews.</h6>
          <form className='container mt-2' onSubmit={handleSearch}>
            <input ref={inputMovieRef} type="text" value={searchText} onChange={(e) => onTypeSearchMovie(e)} className={`form-control movInp mt-2 `} placeholder='Search Movie Name...' />
            {/* suggestions section starts */}
            <div className="suggestions text-start position-absolute mt-1" style={{ maxHeight: "7.5vw", minWidth: "38rem", overflow: "hidden", overflowY: 'scroll', marginLeft: "0vw" }}>
              {suggestions.length > 0 ? suggestions.map((e, i) => (
                <div className="list mt-1" key={i} onClick={(e) => searchBySuggestion(e)}>
                  <h6 className='mx-2 mt-1 p-1' style={{ backgroundColor: '#dbd5d5' }}>{e.original_title}</h6>
                </div>
              )) : ''}

            </div>
            {/* suggestions section ends */}
            <button ref={formSubmtBtn} className="btn-dark btn mt-3">Search</button>
          </form>
        </div>

        <div className="container mt-3 text-center">
          <h6>Showing Results for : {showingDataFor}</h6>
        </div>
        <hr />


        <div className={`container  d-flex gap-4 flex-wrap`} >

          {/* {movieData?.length > 0 ? showMovies : <DotWave/>} */}

          {/* {showMovies} */}
          {/* {movieData?.length > 0 ? <Movie movieData={movieData}/> : 'l'} */}

          {/* {loader ? (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><h4>Search Movies...</h4></div></div>) : <Movie search="search" data={movieData} />} */}

          {getNowPlayingMovies.length > 0 ? <Movie data={getNowPlayingMovies} /> : (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><h4>Search Movies...</h4></div></div>)}


        </div>




      </div>


    </>
  )
}

export default Welcome