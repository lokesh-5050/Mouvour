import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StarFill, ArrowLeftCircle } from 'react-bootstrap-icons'
import '../SingleMovie/SingleMovie.css'
import { DotWave } from '@uiball/loaders';
const SingleMovie = () => {
    const [clickedMovieData, setClickedMovieData] = useState([]);
    const [movieVideo, setMovieVideo] = useState([])
    let { id } = useParams();
    console.log(id);

    let thisMovieData = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US`)
        // console.log(data);
        setClickedMovieData(data)
        console.log("data loaded successfully!");
    }

    useEffect(() => {
        thisMovieData()
        // fetchMovieVideos()
    }, [])

    console.log(clickedMovieData);

    let forRating = []
    // console.log(forRating);
    // forRating.length = 

    for (let i = 0; i < [Math.round(Math.round(clickedMovieData?.vote_average / 2))]; i++) {
        forRating[i] = i
    }
    console.log(forRating);


    let renderMovieData = clickedMovieData?.id ? (<div className="box p-4" key={clickedMovieData.id}>
        <div className="d-flex gap-5" >
            {movieVideo?.length > 0 ? movieVideo.map((f) => (
                <video src={`https://www.youtube.com/watch?v=${f.key}`} autoPlay loop muted height={'310rem'} key={f.id} alt="he"></video>
            )) : (<div className='no_video text-center p-5' style={{ width: "50vw" }}>Can't load the video</div>)}
            <div className="info">
                <h3 className='mt-3 mb-3'>{clickedMovieData.title}</h3>
                <div className="genre d-flex gap-3 mb-3">
                    {clickedMovieData.genres.map((g) => (
                        <em className='p-1' key={g.id} style={{ backgroundColor: "lightgray", borderRadius: '10px' }}>{g.name}</em>
                    ))}
                    {/* <em>Genere</em>
                       <em>Genere</em> */}
                </div>
                <h4 className=' mt-2 mb-4'>Budget : {clickedMovieData.budget} $ </h4>
                <h5 className='mb-3'>Overview</h5>
                <p style={{ maxWidth: "40vw" }}>{clickedMovieData.overview}</p>

                <div className="revenueAndRatings d-flex justify-content-between">
                    <div className="rev">
                        <h4 className='mt-2'>Revenue</h4>
                        <h6>{clickedMovieData.revenue} $</h6>
                    </div>
                    <div className="rev">
                        <h4 className='mt-2'>Ratings</h4>
                        <div className="stars d-flex gap-2">
                            {forRating?.map((e) => (
                                <h6 key={e.id}><StarFill color='black' /></h6>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="s1 mt-4">
                    <h5>Tag-Line</h5>
                    <p>{clickedMovieData.tagline}</p>
                </div>
                <div className="contaier sec-2 mt-4 d-flex justify-content-between">
                    <div className="s1 mb-3">
                        <h5>Relese Date</h5>
                        <p>{clickedMovieData.release_date}</p>
                    </div>
                    <div className="s1 mb-3">
                        <h5>Language</h5>
                        <p>{clickedMovieData.original_language}</p>
                    </div>
                    <div className="s1">
                        <h5>imdb_id</h5>
                        <p>{clickedMovieData.imdb_id}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contaier text-center  position-absolute" style={{ width: "17vw", height: "23vw", top: "30vw", left: "10vw" }}>
            <h2>Poster</h2>
            <div className="container single_poster" style={{ width: "17vw", height: "20vw" }}>
                <img src={`https://image.tmdb.org/t/p/original/${clickedMovieData.poster_path}`} alt="" />
            </div>
        </div>
    </div>) : 'no data'



    // let fetchMovieVideos = async () => {
    //     let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d978e8b4d35276a656ae12c2c4892803`, {
    //         headers: {
    //             'Content-Type': 'application/json;  ',
    //             'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
    //         }
    //     })
    //     console.log(results);
    //     setMovieVideo(results);
    // }


    return (
        <>
            <Link to='/'>
                <div className="back position-absolute">
                    <ArrowLeftCircle fontSize={"2.5vw"} className='mt-2' />
                </div>
            </Link>

            {renderMovieData}

        </>
    )
}

export default SingleMovie