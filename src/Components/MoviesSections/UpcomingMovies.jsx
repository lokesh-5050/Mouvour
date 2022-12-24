import { DotSpinner } from '@uiball/loaders';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../MovieCard/Movie';
const UpcomingMovies = ({ loader, setLoader }) => {

  const [UpcomingMoviesData, setUpcomingMoviesData] = useState([])
  //1st movieData prosp me lao us se hi karo
  // same useSate name in this comp also

  //above two is non-sense just send your data in <Movie/> component as <Movie data={whatEverIsYourData}/> => data namm se bhej bas!

  let fetchUpcomingMovies = async () => {
    console.log(UpcomingMoviesData);
    if (!UpcomingMoviesData.length) {
      setLoader(true)
    }
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&page=1`)
    let { results } = data
    console.log(results);
    setUpcomingMoviesData(results)
    setLoader(false)
    // console.log(UpcomingMoviesData);

  }

  useEffect(() => {
    fetchUpcomingMovies()
  }, [])


  console.log(UpcomingMoviesData);
  return (
    <>
    <div className="container d-flex gap-4 flex-wrap p-5">
    <div className="container text-center">
        <h4><span style={{color:'#0bb84d'}}>Upcoming Movies </span> Movies Section</h4>
      </div>
      {loader ? (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><DotSpinner /></div></div>) : <Movie data={UpcomingMoviesData} upcoming="upcoming" />}
    </div>
    </>
  )
}

export default UpcomingMovies