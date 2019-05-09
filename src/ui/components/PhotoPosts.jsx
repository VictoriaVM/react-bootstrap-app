import React, { Component } from 'react';
import styles from './../../css/train.css';

class PhotoPosts extends Component {
    state = {
        hoverClass: 'isNotHovered'
    };
    onHover = () => {
        this.setState({ hoverClass: 'isHovered' });
    };
    outHover = () => {
        this.setState({ hoverClass: 'isNotHovered' });
    };
    render () {
        return <div className={styles.photo} onMouseOver={this.onHover} onMouseOut={this.outHover} >
            <div className={this.state.hoverClass === 'isNotHovered' ? styles.photo_hover_none : styles.photo_hover} >
                <div className={styles.hover_stats}>
                    <div><img src="https://image.flaticon.com/icons/png/512/14/14136.png" style={{ width: 16, height: 16 }}/></div>
                    <span>724тыс.</span>
                </div>
                <div className={styles.hover_stats} >
                    <div><img src="http://www.iconarchive.com/download/i89259/icons8/ios7/Very-Basic-Speech-Bubble-Filled.ico" style={{ width: 16, height: 16 }}/></div>
                    <span>1 612</span>
                </div>
            </div>
            <div className={styles.photo_container} >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg" style={{ width: 293, height: 293 }}/>
            </div>
        </div>;
    }
}

export default PhotoPosts;
