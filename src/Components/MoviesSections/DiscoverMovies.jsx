import { DotSpinner } from '@uiball/loaders';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Movie from '../MovieCard/Movie';
import { PageProvider } from '../../context/PageContext';
import Pagination from '../Pagination/Pagination';
const DiscoverMovies = ({ loader, setLoader }) => {
  const [page, setPage] = useContext(PageProvider)
  const [DiscoverMoviesData, setDiscoverMoviesData] = useState([])
  //1st movieData prosp me lao us se hi karo
  // same useSate name in this comp also

  //above two is non-sense just send your data in <Movie/> component as <Movie data={whatEverIsYourData}/> => data namm se bhej bas!

  let fetchDiscoverMovies = async () => {
    console.log(DiscoverMoviesData);
    if (!DiscoverMoviesData.length) {
      setLoader(true)
    }
    let { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
    let { results } = data
    console.log(results);
    setDiscoverMoviesData(results)
    setLoader(false)
    // console.log(DiscoverMoviesData);

  }

  useEffect(() => {
    setDiscoverMoviesData([])
    fetchDiscoverMovies()
  }, [page])


  console.log(DiscoverMoviesData);
  return (
    <>
      <div className="container d-flex gap-4 flex-wrap" style={{ padding: '3vw 2.2vw' }}>
        <div className="container text-center">
          <h4><span style={{ color: '#0bb84d' }}>Discover </span> Movies Section</h4>
        </div>
        {loader ? (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><DotSpinner /></div></div>) : <Movie data={DiscoverMoviesData} discover="discover" />}
        <div className="container text-center" style={{ maxHeight: '1.5rem' }}>
          <Pagination data={DiscoverMoviesData} />
        </div>
      </div>
    </>
  )
}

export default DiscoverMovies