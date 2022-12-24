import React from 'react'
import { Link } from 'react-router-dom'
const Movie = ({ data, search, toprated , upcoming ,discover }) => {


  if (toprated) {
    console.log("toprated");
  } else {
    console.log("nothing in toprated");
  }

  if(upcoming){
    console.log("upcoming");
  }

  return (
    <>
      {data?.length > 0 ? (data.map((e, i) => (
        <Link to={`/movies/${search||toprated||upcoming||discover ? search||toprated||upcoming||discover : ''}/${e.id}`} key={e.id}>
          <div className="movie_slot" key={e.id}>
            <div className="poster">
              <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} style={{ width: "14vw" }} alt="image" />
            </div>
            <h4 className='container l-3 mt-2 title'>{e.original_title}</h4>
            <h6 className='container l-3'>{e.release_date}</h6>
            {/* rating animated circle/svg */}
            <svg viewBox="0 0 36 36" className="circular-chart" >
              <path className="circle"
                strokeDasharray={`${e.vote_average * 10} , 100`}
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="7.5" y="23" fontSize={"11px"}>{(e.vote_average) * 10}%</text>
            </svg>
          </div>
        </Link>
      ))) : 'no data'}
    </>
  )
}

export default Movie