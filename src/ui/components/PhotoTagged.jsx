import React, { Component } from 'react';
import styles from './../../css/train.css';

class PhotoTagged extends Component {
    render () {
        return <div className={styles.photo}>
            <img src="https://images.fineartamerica.com/images-medium-large/nature-square--saddleback-dragonfly-carol-groenen.jpg" style={{ width: 293, height: 293 }}/>
        </div>;
    }
}
export default PhotoTagged;
