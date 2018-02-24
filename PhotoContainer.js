import React, { Component } from 'react';

import photos from './data/photos-data'

export default class Photos extends Component {
    constructor() {
        super()
        this.state = {
            video: true
        }
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    playVideo(evt) {
        let vidRef = evt.target;
        this.setState({ video: false });
        console.log('in play', vidRef);
        vidRef.play();
    }

    pauseVideo(evt) {
        let vidRef = evt.target;
        this.setState({ video: true });
        vidRef.pause();
    }


    render() {
        return (
            <div className="flex overflow-x-scroll" >
                {photos.map(boomrang => {
                    return (
                        <div className="pa2 " key={boomrang.title} >
                            <video
                                src={boomrang.url}
                                className="link mw5 dt h5 br2 cover bg-center"
                                onClick={this.state.video ? this.playVideo : this.pauseVideo} />
                        </div>

                    )
                })}


            </div>

        )
    }
}

