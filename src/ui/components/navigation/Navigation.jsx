import React, { Component } from 'react';
import styles from './navigation.css';
import Logo from '../logo/Logo.jsx';
import Form from '../form/Form.jsx';
import Buttons from '../buttons/Buttons.jsx';
import PropTypes from 'prop-types';

class Navigation extends Component {
    state = {
        name: this.props.initialName
    };
    static propTypes = {
        initialName: PropTypes.any.isRequired
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
                <Logo/>
                <Form/>
                <Buttons/>
            </div>
        </div>;
    }
}
export default Navigation;
