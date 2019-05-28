import React, { Component } from 'react';
import Navigation from '../navigation/Navigation.jsx';
import Main from '../main/Main.jsx';

class Train extends Component {
    render () {
        return <section>
            <Navigation/>
            <Main/>
        </section>;
    }
}

export default Train;
