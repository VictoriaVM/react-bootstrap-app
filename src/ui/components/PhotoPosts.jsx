import React, { Component } from 'react';
import styles from './../../css/componentStyles/photoPosts.css';
import PopUp from './PopUp.jsx';
import PropTypes from 'prop-types';

class PhotoPosts extends Component {
    state = {
        hoverClass: false,
        popupVisible: false
    };
    static propTypes = {
        url: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired
    };
    constructor (props) {
        super(props);
        this.escFunction = this.escFunction.bind(this);
    }
    onHover = () => {
        this.setState({ hoverClass: true });
    };
    outHover = () => {
        this.setState({ hoverClass: false });
    };
    updateDataVisibility = () => {
        if (this.state.popupVisible === false) {
            this.setState({ popupVisible: true });
        } else {
            this.setState({ popupVisible: false });
        }
    };
    escFunction (event) {
        if (event.keyCode === 27) {
            this.setState({ popupVisible: false });
        }
    }
    componentDidMount () {
        document.addEventListener('keydown', this.escFunction, false);
    }
    componentWillUnmount () {
        document.removeEventListener('keydown', this.escFunction, false);
    }

    render () {
        return <div
            className={styles.photo}
            onMouseOver={this.onHover}
            onMouseOut={this.outHover}
        >
            { this.state.popupVisible && <PopUp url={this.props.url} updateDataVisibility={this.updateDataVisibility}/> }
            <div className={this.state.hoverClass === false ? styles.photo_hover_none : styles.photo_hover}
                onClick={this.updateDataVisibility}>
                <div className={styles.hover_stats}>
                    <div>
                        <img src="https://image.flaticon.com/icons/png/512/14/14136.png"/>
                    </div>
                    <span>
                        {this.props.likes}
                        тыс.
                    </span>
                </div>
                <div className={styles.hover_stats}>
                    <div>
                        <img src="http://www.iconarchive.com/download/i89259/icons8/ios7/Very-Basic-Speech-Bubble-Filled.ico"/>
                    </div>
                    <span>
                        {this.props.comments.toLocaleString()}
                    </span>
                </div>
            </div>
            <div className={styles.photo_container}>
                <img src={this.props.url}/>
            </div>
        </div>;
    }
}

export default PhotoPosts;
