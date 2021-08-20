import React from "react";

import axios from "axios"
import VideoCard from "./VideoCard";
//import VideoCardModel from "../Models/VideoCardModel"
import "./RecommendeVideos.css"
import { Link } from 'react-router-dom'




class RecommendeVideos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: []
        }
    }





    async componentDidMount() {

        try {

            const response = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IL&key=AIzaSyC2vLVs1d0ridc7pz4EY9jrlAudCwIFLUk");
            // const response = await axios.get(" https://northwind.vercel.app/api/products");


            const db = response.data
            console.log(db)
            console.log(response)
            //    self.setState({ VideoCardModel: { db } });
            this.setState({ videos: response.data.items })
            console.log("1")
            console.log(this.state.videos)



        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (

            <div className="video-list-container">

                <div className="video-list">

                    {this.state.videos.map((i, index) =>

                        <Link key={index} to={`/videoPlayer/${i.id}`} className="link">
                            <VideoCard
                                key={i.id}
                                image={i.snippet.thumbnails.medium.url}
                                channel={i.snippet.channelTitle}
                                channelImage={i.snippet.thumbnails.medium.url}
                                title={i.snippet.title}
                                views={i.statistics.viewCount}

                            />
                        </Link>
                    )}
                </div>

            </div>
        );
    }
}
export default RecommendeVideos
