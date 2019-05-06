import React, { Component } from 'react';
import styles from './../../css/train.css';
import PhotoPosts from './PhotoPosts.jsx';

class PhotoRowPosts extends Component {
    render () {
        return <div className={styles.photo_row}>
            <PhotoPosts/>
            <PhotoPosts/>
            <PhotoPosts/>
        </div>;
    }
}

export default PhotoRowPosts;
