import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { StarFill, ArrowLeftCircle, ArrowRight } from 'react-bootstrap-icons'
import '../SingleMovie/SingleMovie.css'
import { DotWave } from '@uiball/loaders';
import ReactPlayer from 'react-player/youtube'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'
const SingleMovie = ({ goTohome, goToTopRated, goToUpcoming, goToDiscover }) => {
    const [clickedMovieData, setClickedMovieData] = useState([]);
    const [movieVideo, setMovieVideo] = useState([])
    const [videoKey, setVideoKey] = useState('')
    const [credits, setCredits] = useState([])
    const castsDiv = useRef(null);
    let { id } = useParams();
    console.log(id);

    const Naviagte = useNavigate();

    const goBack = () => {
        { goTohome || goToDiscover || goToTopRated || goToUpcoming ? Naviagte(goTohome || goToDiscover || goToTopRated || goToUpcoming) : '/' }
    }


    let thisMovieData = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US`)
        // console.log(data);
        setClickedMovieData(data)
        console.log("data loaded successfully!");
    }

    let thisMovieVideo = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US`)
        let { results } = data;

        // console.log(results);
        await setMovieVideo(results)
        console.log(results);

    }

    const getCasts = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US`)
        let { cast } = data;
        setCredits(cast);
    }

    useEffect(() => {
        thisMovieData()
        // thisMovieVideo()
        getCasts()
        // fetchMovieVideos()
    }, [])

    // console.log(clickedMovieData);

    let forRating = []
    // console.log(forRating);
    // forRating.length = 

    for (let i = 0; i < [Math.round(Math.round(clickedMovieData?.vote_average / 2))]; i++) {
        forRating[i] = i
    }
    // console.log(forRating);

    const opts = {
        height: '350',
        width: '440',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const onReady = (e) => {
        e.target.playVideo()
    }

    setTimeout(() => {
        findKey()
    }, 900);

    const findKey = async () => {
        let got = movieVideo.filter((e) => e.type === "Trailer")
        console.log(got[0].key);
        setVideoKey(got[0].key)
    }


    const castsScrollRight = () => {
        castsDiv.current.scrollLeft = "1vw"
        console.log("ru");
    }




    let renderMovieData = clickedMovieData?.id ? (<div className="box p-4" key={clickedMovieData.id}>
        <div className="d-flex gap-5 upperOne" >
            {videoKey.length > 0 ? <ReactPlayer url={`https://www.youtube.com/watch?v=${videoKey}`} playsinline controls={true} muted={false} playing={true} width={660} height={350} style={{ marginLeft: "2vw" }} /> : <div className='loadingVideoDiv d-flex justify-content-center align-items-center' style={{ minWidth: "47.82223333333vw", minHeight: "10vw" }}>
                <h4 style={{ height: "20vw" }}><DotWave /></h4>
            </div>}

            <div className="info">
                <h3 className='mt-3 mb-3'>{clickedMovieData.title}</h3>
                <div className="genre d-flex gap-3 mb-3">
                    {clickedMovieData.genres.map((g) => (
                        <>
                            <em className='p-1' key={g.id} style={{ backgroundColor: "lightgray", borderRadius: '10px' }}>{g.name}</em>
                            <svg viewBox="0 0 60 60" className="circular-chart position-absolute" style={{ top: '8.8vmax', left: '80vmax' }} >
                                <path className="circle"
                                    strokeDasharray={`${clickedMovieData.vote_average * 10} , 100`}
                                    d="M18 2.0845
                    a 14.9155 14.9155 0 0 1 0 31.831
                    a 14.9155 14.9155 0 0 1 0 -31.831"
                                />
                                <text x="7.5" y="23" fontSize={"7.5px"} style={{ fontStyle: 'bold' }}>{(clickedMovieData.vote_average) * 10}%</text>
                            </svg>
                        </>

                    ))}


                </div>
                <h4 className=' mt-2 mb-4'>Budget : {clickedMovieData.budget} $ </h4>
                <h5 className='mb-3'>Overview</h5>
                <p style={{ maxWidth: "40vw" }}>{clickedMovieData.overview}</p>

                <div className="revenueAndRatings d-flex justify-content-between">
                    <div className="rev">
                        <h4 className='mt-2'>Revenue</h4>
                        <h6 key={clickedMovieData.id}>{clickedMovieData.revenue} $</h6>
                    </div>
                    <div className="rev">
                        <h4 className='mt-2'>Ratings</h4>
                        <div className="stars d-flex gap-2">
                            {forRating?.map((e, i) => (
                                <h6 key={e.i}><StarFill color='black' /></h6>
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
        <div className="contaier posterMov mt-3" style={{ position: 'absolute', width: "40vw", height: "23vw", top: "30vw", left: "4vw" }}>
            <div className="container text-center">

                <h4 style={{ marginLeft: '0' }}>Casts</h4>
            </div>

            {/* <div className="container single_poster" style={{ width: "17vw", height: "20vw" }}>
                <img src={`https://image.tmdb.org/t/p/original/${clickedMovieData.poster_path}`} alt="" />
            </div> */}
            <div ref={castsDiv} className="container casts d-flex gap-4 " style={{ maxWidth: 'inherit', overflowX: 'scroll', }}>
                    {credits?.length > 0 ? (credits.map((c) => (

                        <div className="cast" style={{ maxWidth: '11vmax', maxHeight: "20vmax" }}>
                            <div className="img" >
                                <img height={"240vw"} src={`https://image.tmdb.org/t/p/original/${c.profile_path}`} alt="casts" />
                            </div>
                            <h6>{c.name} <br /> <em>{c.character}</em> </h6>

                        </div>
                    ))) : 'Cant fetch credits'}

            </div>
        </div>
    </div>) : 'no data'








    return (
        <>
            {/* <Link to='/'> */}
            <div onClick={goBack} className="back position-absolute">
                <ArrowLeftCircle fontSize={"2.5vw"} className='mt-2' />
            </div>
            {/* </Link> */}

            {renderMovieData}

        </>
    )
}

export default SingleMovie