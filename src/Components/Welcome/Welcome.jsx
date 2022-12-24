import React, { useState } from 'react'
import '../Welcome/Welcome.css';
import Axios from 'axios'
import { DotSpinner, DotWave } from '@uiball/loaders'
import { Link } from 'react-router-dom';
import Movie from '../MovieCard/Movie';
const Welcome = ({ setSearchText, searchText, movieData, setmovieData , loader , setLoader }) => {

  const [showingDataFor, setShowingDataFor] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchText('')
    setShowingDataFor(searchText)
    if (!movieData.length) {
      console.log("no length");
      // showMovies = <DotWave />
    }
    let query = searchText;
    setLoader(true)
    const { data } = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d978e8b4d35276a656ae12c2c4892803&query=${query}`)
    const { results } = data
    console.log(results);
    setmovieData(results);
    setLoader(false)
  }


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


  return (
    <>

      <div className="container" style={{ position: 'relative', top: '1vw' }}>
        <div className="container title_Welcome text-center w-50">
          <h3>Welcome To Mouvour</h3>
          <h6 >Search for Movies and see Their Reviews.</h6>
          <form className='container mt-2' onSubmit={handleSearch}>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className={`form-control movInp mt-2 `} placeholder='Search Movie Name...' />
            <button className="btn-dark btn mt-3">Search</button>
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

          {loader ? (<div className='container p-5'><div className="container" style={{ display:'flex' ,justifyContent:'center'}} ><h4>Search Movies...</h4></div></div>) : <Movie search="search"  data={movieData}/>}


        </div>




      </div>


    </>
  )
}

export default Welcome