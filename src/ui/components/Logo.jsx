import React, { Component } from 'react';
import styles from './../../css/train.css';

class Logo extends Component {
    render () {
        return <div className={styles.logo}>
            <img src="http://www.transparentpng.com/thumb/logo-instagram/SKq9yH-black-and-white-instagram-logo-png.png" style={{ width: 26, height: 26 }}/>
            <img className={styles.stick} src="https://img.icons8.com/ios/420/thick-vertical-line-filled.png" style={{ width: 3, height: 32 }}/>
            <img className={styles.insta} id='insta' src="https://www.lipoza.com/Uploads/EditorUploads/instagram_.png" style={{ height: 38 }}/>
        </div>;
    }
}

export default Logo;
