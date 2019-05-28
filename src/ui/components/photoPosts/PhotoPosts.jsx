import React, { Component } from 'react';
import styles from './photoPosts.css';
import PopUp from '../popUp/PopUp.jsx';
import PropTypes from 'prop-types';

const ESC_KEY_CODE = 27;

class PhotoPosts extends Component {
    state = {
        hoverClass: false,
        popupVisible: false,
        heartType: 'white',
        likesCountPost: this.props.likes
    };
    static propTypes = {
        url: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        days_ago: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired
    };
    likesRound = () => {
        let number = this.props.likes;
        const zeroCountThousand = 3;
        const zeroCountMillion = 6;
        const zeroCountBillion = 9;
        if (number <= 999999 && number > 999) {
            return Math.round(number / Math.pow(10, zeroCountThousand)) + 'тыс.';
        } else if (number > 999999) {
            return Math.round(number / Math.pow(10, zeroCountMillion)) + 'млн.';
        } else if (number > 999999999) {
            return Math.round(number / Math.pow(10, zeroCountBillion)) + 'млрд.';
        } else {
            return number;
        }
    };
    onHover = () => {
        this.setState({ hoverClass: true });
    };
    outHover = () => {
        this.setState({ hoverClass: false });
    };
    updateDataVisibility = () => {
        if (!this.state.popupVisible) {
            this.setState({ popupVisible: true });
        } else {
            this.setState({ popupVisible: false });
        }
    };
    likeUpdate = () => {
        if (this.state.likesCountPost === this.props.likes) {
            this.setState({
                likesCountPost: this.state.likesCountPost++,
                heartType: 'white'
            });
        } else if (this.state.likesCountPost > this.props.likes) {
            this.setState({
                likesCountPost: this.state.likesCountPost--,
                heartType: 'red'
            });
        }
    };
    escFunction = (event) => {
        if (event.keyCode === ESC_KEY_CODE) {
            this.setState({ popupVisible: false });
        }
    };
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
            { this.state.popupVisible &&
            <PopUp url={this.props.url}
                likes={this.props.likes}
                days_ago={this.props.days_ago}
                heartType={this.state.heartType}
                likesCountPost={this.state.likesCountPost}
                updateDataVisibility={this.updateDataVisibility}
                likeUpdate={this.likeUpdate}/> }
            <div className={this.state.hoverClass === false ? styles.photo_hover_none : styles.photo_hover}
                onClick={this.updateDataVisibility}>
                <div className={styles.hover_stats}>
                    <div>
                        <img src="https://image.flaticon.com/icons/png/512/14/14136.png"/>
                    </div>
                    <span>
                        {this.likesRound(this.state.likesCountPost)}
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
