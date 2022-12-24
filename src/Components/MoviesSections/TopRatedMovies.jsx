import { DotSpinner } from '@uiball/loaders';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../MovieCard/Movie';
const TopRatedMovies = ({ loader, setLoader }) => {

  const [topRatedMoviesData, setTopRatedMoviesData] = useState([])
  //1st movieData prosp me lao us se hi karo
  // same useSate name in this comp also

  //above two is non-sense just send your data in <Movie/> component as <Movie data={whatEverIsYourData}/> => data namm se bhej bas!

  let fetchTopRatedMovies = async () => {
    console.log(topRatedMoviesData);
    if (!topRatedMoviesData.length) {
      setLoader(true)
    }
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&page=1`)
    let { results } = data
    console.log(results);
    setTopRatedMoviesData(results)
    setLoader(false)
    // console.log(topRatedMoviesData);

  }

  useEffect(() => {
    fetchTopRatedMovies()
  }, [])


  console.log(topRatedMoviesData);
  return (
    <>
    <div className="container d-flex gap-4 flex-wrap p-5">

      {loader ? (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><DotSpinner /></div></div>) : <Movie data={topRatedMoviesData} toprated="toprated" />}
    </div>
    </>
  )
}

export default TopRatedMovies