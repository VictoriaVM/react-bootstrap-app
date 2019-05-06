import React, { Component } from 'react';
import styles from './../../css/train.css';
import Header from './Header.jsx';
import Tabs from './Tabs.jsx';

class Main extends Component {
    render () {
        return <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.main_content}>
                    <Header/>
                    <Tabs/>
                </div>
            </div>
        </div>;
    }
}

export default Main;
