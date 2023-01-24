import { DotSpinner } from '@uiball/loaders';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Movie from '../MovieCard/Movie';
import Pagination from '../Pagination/Pagination';
const UpcomingMovies = ({ loader, setLoader }) => {
  const [page, setPage] = useState(1)


  const [UpcomingMoviesData, setUpcomingMoviesData] = useState([])
  //1st movieData prosp me lao us se hi karo
  // same useSate name in this comp also

  //above two is non-sense just send your data in <Movie/> component as <Movie data={whatEverIsYourData}/> => data namm se bhej bas!

  let fetchUpcomingMovies = async () => {
    
    if (!UpcomingMoviesData.length) {
      setLoader(true)
    }
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&page=${page}`)
    let { results } = data
    
    setUpcomingMoviesData(results)
    setLoader(false)
    // 

  }

  useEffect((e) => {
    setPage(1)
    

  }, [])

  useEffect(() => {
    setUpcomingMoviesData([])
    fetchUpcomingMovies()
  }, [page])


  // 
  return (
    <>
      <div className="container d-flex gap-4 flex-wrap" style={{ padding: '3vw 2.2vw' }}>
        <div className="container text-center">
          <h4><span style={{ color: '#0bb84d' }}>Upcoming Movies </span> Movies Section</h4>
        </div>
        {loader ? (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><DotSpinner /></div></div>) : <Movie data={UpcomingMoviesData} upcoming="upcoming" />}
        <div className="container text-center" style={{ maxHeight: '1.5rem' }}>
          <Pagination data={UpcomingMoviesData} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  )
}

export default UpcomingMovies