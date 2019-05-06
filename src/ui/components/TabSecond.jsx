import React, { Component } from 'react';
import PhotoRowTagged from './PhotoRowTagged.jsx';

class TabSecond extends Component {
    render () {
        return (
            <div>
                <div id='tagged'>
                    <PhotoRowTagged/>
                    <PhotoRowTagged/>
                    <PhotoRowTagged/>
                </div>
            </div>
        );
    }
}
export default TabSecond;
