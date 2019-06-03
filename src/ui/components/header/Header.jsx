import React, { Component } from 'react';
import styles from './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        buttonType: PropTypes.string.isRequired,
        followersCount: PropTypes.number.isRequired,
        subscriptions: PropTypes.number.isRequired,
        posts: PropTypes.number.isRequired,
        handleSubscribeClick: PropTypes.func.isRequired
    };
    render () {
        return <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <span>
                        <img src="https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg"/>
                    </span>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <h1 className={styles.profileName}>leonardodicaprio</h1>
                        <span className={styles.verified}><img
                            src="https://png.icons8.com/ios/1600/007AFF/verified-account"/></span>
                        <button
                            className={this.props.buttonType === 'follow' ? styles.enter_btn : styles.follow_btn}
                            onClick={this.props.handleSubscribeClick}
                        >
                            {this.props.buttonType === 'follow' ? 'Подписаться' : 'Подписки'}
                        </button>
                        <button
                            className={this.props.buttonType === 'follow' ? styles.info_btn : styles.info_btn_mod}
                        >
                            <div><span>&#9660;</span></div>
                        </button>
                        <a
                            className={styles.info_dots}
                        >
                            <span>...</span>
                        </a>
                    </div>
                    <ul className={styles.stats}>
                        <li><span>{this.props.posts}</span> публикаций</li>
                        <li><span>{this.props.followersCount}</span> подписчиков</li>
                        <li>Подписки: <span>{this.props.subscriptions}</span></li>
                    </ul>
                    <div>
                        <h2>Leonardo DiCaprio</h2><br/>
                        <span>Actor and Environmentalist</span><br/>
                        <a href=''
                            className={styles.info_link}
                            target="_blank">
                            globaldealfornature.org
                        </a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Header;
