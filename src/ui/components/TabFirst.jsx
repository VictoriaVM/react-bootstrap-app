import React, { Component } from 'react';
import PhotoRowPosts from './PhotoRowPosts.jsx';
import styles from './../../css/train.css';

class TabFirst extends Component {
    render () {
        return (
            <div>
                <div id='post'>
                    <PhotoRowPosts/>
                    <PhotoRowPosts/>
                    <PhotoRowPosts/>
                </div>
            </div>
        );
    }
}

export default TabFirst;
