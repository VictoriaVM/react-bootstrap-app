import React, { Component } from 'react';
import styles from './../../css/componentStyles/navigation.css';
import Logo from './Logo.jsx';
import Form from './Form.jsx';
import Buttons from './Buttons.jsx';

class Navigation extends Component {
    state = {
        name: this.props.initialName
    }
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
    }
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
