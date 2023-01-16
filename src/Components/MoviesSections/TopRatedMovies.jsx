import { DotSpinner } from '@uiball/loaders';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Movie from '../MovieCard/Movie';
import Pagination from '../Pagination/Pagination';
import { PageProvider } from '../../context/PageContext';
const TopRatedMovies = ({ loader, setLoader }) => {

  const [page, setPage] = useContext(PageProvider)

  const [topRatedMoviesData, setTopRatedMoviesData] = useState([])
  //1st movieData prosp me lao us se hi karo
  // same useSate name in this comp also

  //above two is non-sense just send your data in <Movie/> component as <Movie data={whatEverIsYourData}/> => data namm se bhej bas!

  let fetchTopRatedMovies = async () => {
    console.log(topRatedMoviesData);
    if (!topRatedMoviesData.length) {
      setLoader(true)
    }
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US&page=${page}`)
    let { results } = data
    console.log(results);
    setTopRatedMoviesData(results)
    setLoader(false)
    // console.log(topRatedMoviesData);

  }

  useEffect((e) => {
    setPage(1)
    
  }, [])
  console.log(page);

  useEffect(() => {
    setTopRatedMoviesData([])
    fetchTopRatedMovies()
    console.log("page changed" + page);
  }, [page])


  // console.log(topRatedMoviesData);
  return (
    <>
      <div className="container TopRated d-flex gap-4 flex-wrap" style={{ padding: '3vw 2.2vw' }}>
        <div className="container text-center">
          <h4><span style={{ color: '#0bb84d' }}>Top-Rated </span> Movies Section</h4>
        </div>

        {loader ? (<div className='container p-5'><div className="container" style={{ display: 'flex', justifyContent: 'center' }} ><DotSpinner /></div></div>) : <Movie data={topRatedMoviesData} toprated="toprated" />}
        <div className="container text-center" style={{ maxHeight: '1.5rem' }}>
          <Pagination data={topRatedMoviesData} />
        </div>
      </div>
    </>
  )
}

export default TopRatedMovies