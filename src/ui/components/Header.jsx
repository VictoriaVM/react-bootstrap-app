import React, { Component } from 'react';
// import styles from './../../css/train.css';
import styles from './../../css/componentStyles/header.css';

class Header extends Component {
    state = {
        user: {
            followersCount: 95,
            buttonType: 'notFollow',
            subscriptions: 31
        }
    };
    updateData = () => {
        if (this.state.user.buttonType === 'follow') {
            this.setState({
                user: {
                    ...this.state.user,
                    followersCount: this.state.user.followersCount--,
                    ...this.state.user,
                    buttonType: 'notFollow'
                }
            });
        } else {
            this.setState({
                user: {
                    ...this.state.user,
                    followersCount: this.state.user.followersCount++,
                    ...this.state.user,
                    buttonType: 'follow'
                }
            });
        }
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
                        <h1 className={'profileName'}>leonardodicaprio</h1>
                        <span className={styles.verified}><img
                            src="https://png.icons8.com/ios/1600/007AFF/verified-account"/></span>
                        <button
                            className={this.state.user.buttonType === 'notFollow' ? styles.enter_btn : styles.follow_btn}
                            onClick={() => {
                                this.updateData(this.state.user.followersCount, this.state.user.buttonType);
                            }}
                        >
                            {this.state.user.buttonType === 'follow' ? 'Подписки' : 'Подписаться'}
                        </button>
                        <button
                            className={this.state.user.buttonType === 'notFollow' ? styles.info_btn : styles.info_btn_mod}
                        >
                            <div><span>&#9660;</span></div>
                        </button>
                        <a
                            className={styles.info_dots}
                        >
                            <span>...</span>
                        </a>
                    </div>
                    <ul className={'stats'}>
                        <li><span>978</span> публикаций</li>
                        <li><span>{this.state.user.followersCount}</span> подписчиков</li>
                        <li>Подписки: <span>{this.state.user.subscriptions}</span></li>
                    </ul>
                    <div>
                        <h2>Leonardo DiCaprio</h2><br/>
                        <span>Actor and Environmentalist</span><br/>
                        <a href="https://l.instagram.com/?u=http%3A%2F%2Fglobaldealfornature.org%2F&amp;e=ATO6prVX3zI8NGvQMhr-rPbDnWOEU0ktkPpLPhdllQlN_YfxUoKdqIncv7LqA-RxpGwmg_a6"
                            className={styles.info_link}
                            rel="me nofollow noopener noreferrer"
                            target="_blank">globaldealfornature.org</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Header;
