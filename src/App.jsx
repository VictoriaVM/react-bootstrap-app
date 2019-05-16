import React, { Component } from 'react';

import media from './ui/hocs/media/media.jsx';

import '../client/vendor';
import './css/main.css';
import './css/componentStyles/buttons.css';
import './css/componentStyles/form.css';
import './css/componentStyles/header.css';
import './css/componentStyles/logo.css';
import './css/componentStyles/main.css';
import './css/componentStyles/navigation.css';
import './css/componentStyles/photoPosts.css';
import './css/componentStyles/tab.css';
import './css/componentStyles/tabs.css';

import MainPage from './ui/pages/MainPage/MainPage.jsx';

import { Switch, Route, withRouter } from 'react-router-dom';

@media
class App extends Component {
    render () {
        return <main>
            <Switch>
                <Route exact path='/' component={MainPage} />
            </Switch>
        </main>;
    }
}

export default withRouter(App);
