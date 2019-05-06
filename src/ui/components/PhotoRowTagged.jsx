import React, { Component } from 'react';
import styles from './../../css/train.css';
import PhotoTagged from './PhotoTagged.jsx';

class PhotoRowTagged extends Component {
    render () {
        return <div className={styles.photo_row}>
            <PhotoTagged/>
            <PhotoTagged/>
            <PhotoTagged/>
        </div>;
    }
}

export default PhotoRowTagged;
