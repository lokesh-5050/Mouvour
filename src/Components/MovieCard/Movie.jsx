import { DotSpinner } from '@uiball/loaders';
import React from 'react'
import { Link } from 'react-router-dom'
import '../MovieCard/Movie.css'
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
        <Link to={`/movies/${search||toprated||upcoming||discover ? search||toprated||upcoming||discover : ''}/${e.id}`} key={e.id} style={{color:"#000",textDecoration:'none'}}>
          <div className="movie_slot position-relative" key={e.id}>
            <div className="poster">
              <img id='potser_img' src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} style={{ width: "23vmin" }} alt="image" />
            </div>
            <svg viewBox="0 0 36 36" className="circular-chart position-absolute" style={{top:'17.2vmax',left:'9vmax'}} >
              <path className="circle"
                strokeDasharray={`${e.vote_average * 10} , 100`}
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="7.5" y="23" fontSize={"11px"}>{(e.vote_average) * 10}%</text>
            </svg>
            <h4 className='container mt-2 title fs-6' style={{maxWidth:"12vmax",marginLeft:"-0.8vw"}}>{e.original_title}</h4>
            <h6 className='container l-3'>{e.release_date}</h6>
            {/* rating animated circle/svg */}
            
          </div>
        </Link>
      ))) : (<div className='container p-5'><div className="container" style={{ display:'flex' ,justifyContent:'center'}} ><DotSpinner/></div></div>)}
    </>
  )
}

export default Movie