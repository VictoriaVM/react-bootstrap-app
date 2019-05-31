import React, { Component } from 'react';
import styles from './popUp.css';
import PropTypes from 'prop-types';

class PopUp extends Component {
    state = {
    };
    static propTypes = {
        url: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        days_ago: PropTypes.number.isRequired,
        heartType: PropTypes.string.isRequired,
        updateDataVisibility: PropTypes.func.isRequired,
        handleLikeClick: PropTypes.func.isRequired,
        buttonType: PropTypes.string.isRequired,
        handleSubscribeClick: PropTypes.func.isRequired,
        avatarImage: PropTypes.string.isRequired,
        profileName: PropTypes.string.isRequired,
        verifiedImage: PropTypes.bool.isRequired,
        userComments: PropTypes.object.isRequired,
        handleComment: PropTypes.func.isRequired
    };
    constructor (props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    };
    date = () => {
        if (this.props.days_ago === 1) {
            return 'день';
        } else if (this.props.days_ago === 2 || this.props.days_ago === 3 || this.props.days_ago === 4) {
            return 'дня';
        } else {
            return 'дней';
        }
    };
    setWrapperRef (node) {
        this.wrapperRef = node;
    };
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.updateDataVisibility(this.state.popupVisible);
        }
    };
    componentDidMount () {
        document.body.classList.add(styles.overflow_hidden);
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount () {
        document.body.classList.remove(styles.overflow_hidden);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    render () {
        return <div>
            <div className={styles.b_popup}>
                <div className={styles.closeIcon} onClick={() => {
                    this.props.updateDataVisibility(this.state.popupVisible);
                }}>
                    <span>
                        <img src="https://png.pngtree.com/svg/20161106/ee8df8289e.png"/>
                    </span>
                </div>
                <div className={styles.b_popup_content} ref={this.setWrapperRef}>
                    <div className="photo_post_container">
                        <img className={styles.photo_post_img} src={this.props.url}/>
                    </div>
                    <div className={styles.info_container}>
                        <div className={styles.post_info_top}>
                            <div className={styles.avatar_post}>
                                <span>
                                    <img src={this.props.avatarImage}/>
                                </span>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.top}>
                                    <h1 className={styles.profileName_post}>{this.props.profileName}</h1>
                                    <span className={styles.verified}>
                                        {this.props.verifiedImage && <img src="https://png.icons8.com/ios/1600/007AFF/verified-account"/> }
                                    </span>
                                    <a
                                        className={styles.post_dots}
                                    >
                                        <span>.</span>
                                    </a>
                                    <a
                                        className={this.props.buttonType === 'follow' ? styles.subscribe_btn : styles.unsubscribe_btn}
                                        onClick={this.props.handleSubscribeClick}
                                    >
                                        {this.props.buttonType === 'notFollow' ? 'Подписки' : 'Подписаться'}
                                    </a>
                                    <a
                                        className={styles.post_dots_triple}
                                    >
                                        <span>...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.post_info_cover}>
                            <div className={styles.post_info}>
                                <div className={styles.info}>
                                    <div className={styles.avatar_post}>
                                        <span>
                                            <img
                                                src={this.props.avatarImage}
                                            />
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className={styles.profileName_post}>{this.props.profileName}</h2>
                                        <span className={styles.verified}>
                                            {this.props.verifiedImage && <img src="https://png.icons8.com/ios/1600/007AFF/verified-account"/> }
                                        </span>
                                        <span className={styles.post_text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                            in culpa qui officia deserunt mollit anim id est laborum.
                                        </span>
                                    </div>
                                </div>
                                {this.props.userComments.commentText.length > 0 &&
                                    <div className={styles.info}>
                                        <div className={styles.avatar_post}>
                                            <span>
                                                <img
                                                    src={'https://static.appvn.com/a/uploads/thumbnails/112015/mr-square_icon.png'}
                                                />
                                            </span>
                                        </div>
                                        <div>
                                            <h2 className={styles.profileName_post}>cutesquare</h2>
                                            <span className={styles.verified}/>
                                            <span className={styles.post_text}>
                                                {this.props.userComments.commentText}
                                            </span>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={styles.post_info_icons}>
                            <div className={styles.icons}>
                                <div className={styles.icons_left}>
                                    <img className={styles.popUpIcons}
                                        src={this.props.heartType === 'white'
                                            ? 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/39.Heart-512.png'
                                            : 'http://downloadicons.net/sites/default/files/red-heart-icon-16591.png'}
                                        onClick={this.props.handleLikeClick}
                                    />
                                    <img className={styles.popUpIcons}
                                        src="http://download.seaicons.com/download/i89260/icons8/ios7/icons8-ios7-very-basic-speech-bubble.ico"/>
                                    <img className={styles.popUpIcons}
                                        src="https://image.flaticon.com/icons/svg/1159/1159763.svg"/>
                                </div>
                                <img className={styles.popUpIcons_mark}
                                    src="http://pngimages.net/sites/default/files/bookmark-png-image-95855.png"/>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.likes}>{this.props.likes.toLocaleString()} отметок "Нравится"</span>
                            </div>
                            <div className={styles.info_date}>
                                <span>{this.props.days_ago} {this.date()} назад</span>
                            </div>
                        </div>
                        <div className={styles.post_info_comment}>
                            <div className={styles.info}>
                                <form>
                                    <span>
                                        <input
                                            type='text'
                                            placeholder='Добавьте комментарий...'
                                            id='elem1'
                                        />
                                    </span>
                                    <a className={styles.subscribe_btn} onClick={this.props.handleComment}>
                                    Опубликовать
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default PopUp;
