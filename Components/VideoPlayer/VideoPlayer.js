import React from "react"
import YouTube from "react-youtube"
import { withRouter } from "react-router";
import axios from "axios"
import VideoInfo from "../VideoInfo/VideoInfo"
import "./VideoPlayer.css"
import RecommendeVideos from "../RecommendeVideos/RecommendeVideos"


class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videoDetails: [],
            videoId: this.props.match.params.videoId
        }

    }



    async componentDidMount() {

        try {

            const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${this.state.videoId}&key=AIzaSyC2vLVs1d0ridc7pz4EY9jrlAudCwIFLUk`)
            const db = response.data
            console.log(db)
            console.log(response)
            this.setState({ videoDetails: response.data.items })
            console.log(this.state.videoDetails)
        }
        catch (err) {
            console.log(err)
        }
    }

    async componentDidUpdate() {
        try {
            if (this.state.videoId !== this.props.match.params.videoId) {
                console.log("not ")
                await this.setState({ videoId: this.props.match.params.videoId })
                console.log(this.state.videoId)
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${this.state.videoId}&key=AIzaSyC2vLVs1d0ridc7pz4EY9jrlAudCwIFLUk`)
                const db = response.data
                console.log(db)
                console.log(response)
                this.setState({ videoDetails: response.data.items })
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div className="video-player-container">
                <div className="video-Area">
                    <div className="video">
                        <YouTube
                            width={720}
                            videoId={this.state.videoId}
                        />
                    </div>
                    <div className="videoplayer__videoinfo">
                        {this.state.videoDetails.map((i) =>
                            <VideoInfo
                                title={i.snippet.title}
                                description={i.snippet.description}
                                publishedDate={i.snippet.publishedDate}
                                channelTitle={i.snippet.channelTitle}
                                viewCount={i.statistics.viewCount}
                                channelImage={i.snippet.channelImage}
                                subs={i.statistics.subscriberCount}
                            />
                        )}
                    </div>
                </div>
                <div className="videoplayer__suggested">
                    <RecommendeVideos />
                </div>
            </div>
        )
    }
}

export default withRouter(VideoPlayer)


