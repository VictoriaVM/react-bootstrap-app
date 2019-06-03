import React, { Component } from 'react';
import styles from './Logo.css';
import PropTypes from 'prop-types';

class Logo extends Component {
    state = {
        name: this.props.initialName
    };
    static propTypes = {
        initialName: PropTypes.any.isRequired
    };
    componentDidMount () {
        window.addEventListener('scroll', this.handlePageScroll);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handlePageScroll);
    }

    handlePageScroll = (e) => {
        const { pageIsScrolled } = this.state;

        if (pageIsScrolled && window.pageYOffset === 0) {
            this.setState({
                pageIsScrolled: false
            });
        } else if (!pageIsScrolled && window.pageYOffset !== 0) {
            this.setState({
                pageIsScrolled: true
            });
        }
    };
    render () {
        const { pageIsScrolled } = this.state;
        return <div className={styles.logo}>
            <img className={styles.insta_logo} src="https://clipart.info/images/ccovers/1516920571instagram-png-instagram-icon-1600x1600.png"/>
            <img className={pageIsScrolled ? styles.stick_hidden : styles.stick}
                src="https://img.icons8.com/ios/420/thick-vertical-line-filled.png"
            />
            <img className={pageIsScrolled ? styles.insta_hidden : styles.insta}
                src="https://www.lipoza.com/Uploads/EditorUploads/instagram_.png"
            />
        </div>;
    }
}

export default Logo;
