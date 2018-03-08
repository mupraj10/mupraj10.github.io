import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import photos from './data/photos-data';

export default class Photos extends Component {


    render() {
        return (
            <div className="" >

            <Gallery photos={photos} />


            </div>

        )
    }
}

