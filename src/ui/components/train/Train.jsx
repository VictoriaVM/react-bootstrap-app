import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import Main from '../Main/Main.jsx';

class Train extends Component {
    render () {
        return <section>
            <Navigation/>
            <Main/>
        </section>;
    }
}

export default Train;
