import React, { Component } from 'react';
import styles from './../../css/train.css';

class PhotoPosts extends Component {
    render () {
        return <div className={styles.photo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg" style={{ width: 293, height: 293 }}/>
        </div>;
    }
}

export default PhotoPosts;
