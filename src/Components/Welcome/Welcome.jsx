import React, { useContext, useEffect, useRef, useState } from 'react'
import '../Welcome/Welcome.css';
import Axios from 'axios'
import { DotSpinner, DotWave } from '@uiball/loaders'
import { Link } from 'react-router-dom';
import Movie from '../MovieCard/Movie';

import axios from 'axios';
import Pagination from '../Pagination/Pagination';

const Welcome = ({ setSearchText, searchText, movieData, setmovieData, loader, setLoader, suggestions, setSuggestions, forMovies, forTv }) => {
  const [page, setPage] = useState(1)
  const [showingDataFor, setShowingDataFor] = useState('')
  const inputMovieRef = useRef(null)
  const formSubmtBtn = useRef(null)
  const [getNowPlayingMovies, setGetNowPlayingMovies] = useState([]);
  // 
  const handleSearch = async (e) => {
    e.preventDefault();
    setSuggestions([]);

    setShowingDataFor(inputMovieRef.current.value)
    if (inputMovieRef.current.value == 0) {

      alert("Must write something!")
      // return;
    } else {
      let query = inputMovieRef.current.value;
      setLoader(true)
      if (forTv) {
        setGetNowPlayingMovies([])
        const { data } = await Axios.get(`https://api.themoviedb.org/3/search/tv?api_key=d978e8b4d35276a656ae12c2c4892803&query=${query}`)
        const { results } = data

        setmovieData(results);
        setLoader(false)
        setSearchText('')
      } else {
        setGetNowPlayingMovies([])
        const { data } = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d978e8b4d35276a656ae12c2c4892803&query=${query}`)
        const { results } = data

        setmovieData(results);
        setLoader(false)
        setSearchText('')
      }
    }
  }

  const fetchNowPlayingMoviesOrTv = async () => {
    if (forTv) {
      let { data } = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&page=${page}`)
      let { results } = data;
      setGetNowPlayingMovies(results)
    } else {
      let { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&page=${page}`)
      let { results } = data;
      setGetNowPlayingMovies(results)
    }
  }



  // }, [])

  useEffect((e) => {
    fetchNowPlayingMoviesOrTv()
  }, [page])


  const delayedSuggestion = async () => {
    let query = searchText;
    if (forTv) {
      const { data } = await Axios.get(`https://api.themoviedb.org/3/search/tv?api_key=d978e8b4d35276a656ae12c2c4892803&query=${query}`)
      const { results } = data
      setSuggestions(results)
    } else {
      const { data } = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d978e8b4d35276a656ae12c2c4892803&query=${query}`)
      const { results } = data
      setSuggestions(results)
    }
  }

  const onTypeSearchMovie = async (e) => {
    setSearchText(e.target.value)
    if (inputMovieRef.current.value.length > 0) {
      setTimeout(() => {
        delayedSuggestion()
      }, 100);
    } else if (inputMovieRef.current.value.length === 0) {
      setSuggestions([])
    }
  }

  const searchBySuggestion = async (f) => {
    inputMovieRef.current.value = f.target.innerHTML
    handleSearch(f)
  }

  return (
    <>
      <div className="container" style={{ position: 'relative', top: '1vw' }}>
        <div className="container title_Welcome text-center w-50">
          <h3>Welcome To Mouvour</h3>
          <h6 >Search for {forMovies || forTv ? forMovies || forTv : ''} and see Their Reviews.</h6>
          <form className='container mt-2' onSubmit={handleSearch}>
            <input ref={inputMovieRef} type="text" value={searchText} onChange={(e) => onTypeSearchMovie(e)} className={`form-control movInp mt-2 `} placeholder='Search Movie Name...' />
            {/* suggestions section starts */}
            <div className="suggestions text-start position-absolute mt-1" style={{ maxHeight: "7.5vw", minWidth: "38rem", overflow: "hidden", overflowY: 'scroll', marginLeft: "0vw" }}>
              {suggestions.length > 0 ? suggestions.map((e, i) => (
                <div className="list mt-1" key={i} onClick={(e) => searchBySuggestion(e)}>
                  <h6 className='mx-2 mt-1 p-1' style={{ backgroundColor: '#dbd5d5' }}>{forTv ? e.original_name : e.original_title}</h6>
                </div>
              )) : ''}
            </div>
            {/* suggestions section ends */}
            <button ref={formSubmtBtn} className="btn-dark btn mt-3" onClick={handleSearch}>Search</button>
          </form>
        </div>
        <div className="container mt-3 text-center">
          <h6> {showingDataFor.length > 0 ? `Showing Results for : ${showingDataFor}` : ''}</h6>
        </div>
        <hr />
        <div className={`container  d-flex gap-4 flex-wrap`} >
          {getNowPlayingMovies.length > 0 ? <Movie data={getNowPlayingMovies} forTv={forTv} now_playing='now-playing' /> : movieData.length > 0 ? <Movie data={movieData} forTv={forTv} search='search' /> : (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><DotSpinner /></div></div>)}
          <div className="container text-center " style={{ maxHeight: '1.8rem' }}>
            <Pagination data={getNowPlayingMovies} page={page} setPage={setPage} />
          </div>

        </div>
      </div>
    </>
  )
}

export default Welcome