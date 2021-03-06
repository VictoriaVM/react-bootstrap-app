import React, { Component } from 'react';
import styles from './Navigation.css';
import Logo from '../Logo/Logo.jsx';
import Form from '../Form/Form.jsx';
import Buttons from '../Buttons/Buttons.jsx';

class Navigation extends Component {
    state = {
        initialName: false
    };
    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const { isScrolled } = this.state;

        if (isScrolled && window.pageYOffset === 0) {
            this.setState({
                isScrolled: false
            });
        } else if (!isScrolled && window.pageYOffset !== 0) {
            this.setState({
                isScrolled: true
            });
        }
    };
    render () {
        const { isScrolled } = this.state;
        return <div className={isScrolled ? styles.navigation_modified : styles.navigation}>
            <div className={styles.content}>
                <Logo initialName={this.state.initialName}/>
                <Form/>
                <Buttons/>
            </div>
        </div>;
    }
}
export default Navigation;
