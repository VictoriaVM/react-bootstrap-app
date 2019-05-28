import React, { Component } from 'react';

import media from './ui/hocs/media/media.jsx';

import '../client/vendor';
import './css/main.css';
import './ui/components/buttons/buttons.css';
import './ui/components/form/form.css';
import './ui/components/header/header.css';
import './ui/components/logo/logo.css';
import './ui/components/main/main.css';
import './ui/components/navigation/navigation.css';
import './ui/components/photoPosts/photoPosts.css';
import './ui/components/tabs/tabs.css';

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
