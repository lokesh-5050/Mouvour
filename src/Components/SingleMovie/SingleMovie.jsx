import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Video from '../../Utils/lake.mp4'
import { useParams } from 'react-router-dom'
import { StarFill } from 'react-bootstrap-icons'
import '../SingleMovie/SingleMovie.css'
const SingleMovie = ({ movieData }) => {
    const [singleMovieData, setSingleMovieData] = useState([]);
    const [movieVideo, setMovieVideo] = useState([])
    let {id} = useParams();
    console.log(id);

    useEffect(() => {
        console.log(id);
        var thisMovie = movieData.filter((e) => e.id == id);
        console.log(thisMovie);
        setSingleMovieData(thisMovie);

        // fetchMovieVideos()



    }, [])


    let fetchMovieVideos = async () => {
        let { results } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d978e8b4d35276a656ae12c2c4892803&language=en-US`, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
            }
        })
        setMovieVideo(results);
    }

    return (
        <>
            {/* {singleMovieData?.length > 0 ? } */}
            <div className="box p-4">
                <div className="d-flex gap-5">
                    <video src={Video} autoPlay loop muted height={'310rem'} alt="he"></video>
                    <div className="info">
                        <h3 className='mt-3 mb-3'>title</h3>
                        <div className="genre d-flex gap-3 mb-3">
                            <em>Genere</em>
                            <em>Genere</em>
                            <em>Genere</em>
                        </div>
                        <h4 className=' mt-2 mb-4'>Budget : </h4>
                        <h5 className='mb-3'>Overview</h5>
                        <p style={{ maxWidth: "40vw" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta officia possimus aut. Itaque excepturi eius doloremque? Blanditiis, doloremque ad.</p>

                        <div className="revenueAndRatings d-flex justify-content-between">
                            <div className="rev">
                                <h4 className='mt-2'>Revenue</h4>
                                <p>756567567$</p>
                            </div>
                            <div className="rev">
                                <h4 className='mt-2'>Ratings</h4>
                                <h6><StarFill color='black' /></h6>
                            </div>
                        </div>
                        <div className="s1 mt-4">
                            <h5>Tag-Line</h5>
                            <p>HEHHEHEHHEH</p>
                        </div>
                        <div className="contaier sec-2 mt-4 d-flex justify-content-between">
                            <div className="s1 mb-3">
                                <h5>Relese Date</h5>
                                <p>2022:19:9</p>
                            </div>
                            <div className="s1 mb-3">
                                <h5>Language</h5>
                                <p>English</p>
                            </div>
                            <div className="s1">
                                <h5>imdb_id</h5>
                                <p>tt0098635 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contaier text-center  position-absolute" style={{ width: "17vw", height: "23vw", top: "30vw", left: "10vw" }}>
                    <h2>Poster</h2>
                    <div className="container single_poster" style={{ width: "17vw", height: "20vw" }}>
                        <img src="https://images.unsplash.com/photo-1671584643473-891afcd941d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleMovie