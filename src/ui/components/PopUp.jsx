import React, { Component } from 'react';
import styles from '../../css/componentStyles/popUp.css';
import PropTypes from 'prop-types';

class PopUp extends Component {
    state = {
        buttonType: 'follow'
    };
    static propTypes = {
        url: PropTypes.string.isRequired,
        updateDataVisibility: PropTypes.func.isRequired
    };
    updateData = () => {
        if (this.state.buttonType === 'follow') {
            this.setState({ buttonType: 'notFollow' });
        } else {
            this.setState({ buttonType: 'follow' });
        }
    };
    componentDidMount () {
        document.body.classList.add(styles.overflow_hidden);
    }
    componentWillUnmount () {
        document.body.classList.remove(styles.overflow_hidden);
    }
    render () {
        return <div>
            <div className={styles.b_popup}>
                <div className={styles.closeIcon} onClick={() => { this.props.updateDataVisibility(this.state.popupVisible); }}>
                    <span>
                        <img src="https://png.pngtree.com/svg/20161106/ee8df8289e.png"/>
                    </span>
                </div>
                <div className={styles.b_popup_content}>
                    <div className="photo_post_container">
                        <img className={styles.photo_post_img} src={this.props.url}/>
                    </div>
                    <div className={styles.info_container}>
                        <div className={styles.post_info_top}>
                            <div className={styles.avatar_post}>
                                <span>
                                    <img src="https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg"/>
                                </span>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.top}>
                                    <h1 className={styles.profileName_post}>leonardodicaprio</h1>
                                    <span className={styles.verified}><img
                                        src="https://png.icons8.com/ios/1600/007AFF/verified-account"/></span>
                                    <a
                                        className={styles.post_dots}
                                    >
                                        <span>.</span>
                                    </a>
                                    <a
                                        className={this.state.buttonType === 'follow' ? styles.subscribe_btn : styles.unsubscribe_btn}
                                        onClick={() => {
                                            this.updateData(this.state.buttonType);
                                        }}
                                    >
                                        {this.state.buttonType === 'notFollow' ? 'Подписки' : 'Подписаться'}
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
                                            <img src="https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg"/>
                                        </span>
                                    </div>
                                    <div>
                                        <h1 className={styles.profileName_post}>leonardodicaprio</h1>
                                        <span className={styles.verified}>
                                            <img src="https://png.icons8.com/ios/1600/007AFF/verified-account"/>
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
                            </div>
                        </div>
                        <div className={styles.post_info_icons}>
                            <div className={styles.info}>
                            </div>
                        </div>
                        <div className={styles.post_info_comment}>
                            <div className={styles.info}>
                                <span>Добавьте комментарий...</span>
                                <a className={styles.subscribe_btn}>
                                    Опубликовать
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default PopUp;
