import React, { Component } from 'react';
import styles from './../../css/train.css';

class Header extends Component {
    render () {
        return <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <span>
                        <img src="https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg" />
                    </span>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <h1 className={styles.profileName}>leonardodicaprio</h1>
                        <span className={styles.verified}><img src="https://png.icons8.com/ios/1600/007AFF/verified-account"/></span>
                        <button
                            className={styles.enter_btn}
                            onClick={this.onBtnClickHandler}
                            ref='enter_button'
                        >
                            Подписаться
                        </button>
                        <button
                            className={styles.info_btn}
                        >
                            <span>&#9660;</span>
                        </button>
                        <a
                            className={styles.info_dots}
                        >
                            <span>...</span>
                        </a>
                    </div>
                    <ul className={styles.stats}>
                        <li><span>978</span> публикаций</li>
                        <li><span>30,9млн</span> подписчиков</li>
                        <li>Подписки: <span>31</span></li>
                    </ul>
                    <div>
                        <h2>Leonardo DiCaprio</h2><br/>
                        <span>Actor and Environmentalist</span><br/>
                        <a href="https://l.instagram.com/?u=http%3A%2F%2Fglobaldealfornature.org%2F&amp;e=ATO6prVX3zI8NGvQMhr-rPbDnWOEU0ktkPpLPhdllQlN_YfxUoKdqIncv7LqA-RxpGwmg_a6"
                            rel="me nofollow noopener noreferrer"
                            target="_blank">globaldealfornature.org</a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Header;
