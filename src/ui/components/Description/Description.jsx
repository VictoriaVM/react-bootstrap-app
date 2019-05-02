import React, { Component } from 'react';

import styles from './Description.css';

class Logo extends Component {
    render () {
        return <div className={styles.logo}>
            <img src="http://www.transparentpng.com/thumb/logo-instagram/SKq9yH-black-and-white-instagram-logo-png.png" style={{ width: 26, height: 26 }}/>
            <img className={styles.stick} src="https://img.icons8.com/ios/420/thick-vertical-line-filled.png" style={{ width: 3, height: 32 }}/>
            <img className={styles.insta} src="https://www.lipoza.com/Uploads/EditorUploads/instagram_.png" style={{ height: 38 }}/>
             </div>;
    }
}

class Form extends Component {
    render () {
        return <div className={styles.form}>
            <form className='add cf'>
                <div className={styles.glass} role="button" tabIndex="0">
                    <span className={styles.SearchIcon}><img className={styles.SearchIcon} src="https://pngimage.net/wp-content/uploads/2018/06/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BB%D1%83%D0%BF%D0%B0-png-8.png"/></span>
                </div>
                <input
                    className='add__btn'
                    type='text'
                    placeholder='Поиск'
                    ref='search'
                />

            </form>
        </div>;
    }
}

class Buttons extends Component {
    render () {
        return <div className={styles.buttons}>
            <button
                className={styles.enter_btn}
                onClick={this.onBtnClickHandler}
                ref='enter_button'
            >
                Войти
            </button>
            <a
                className={styles.register_btn}
                onClick={this.onBtnClickHandler}
                ref='register_button'
            >
                Зарегистрироваться
            </a>
        </div>;
    }
}

class Nav extends Component {
    render () {
        return <div className={styles.nav}>
            <div className={styles.content}>
            <Logo/>
            <Form/>
            <Buttons/>
            </div>
        </div>;
    }
}
class Avatar extends Component {
    render () {
        return <div className={styles.avatar}>
            <span>
                <img src="https://www.sde.co.ke/sdemedia/sdeimages/pulse/Leonardo111114.jpg" />
            </span>
        </div>;
    }
}

class Info extends Component {
    render () {
        return <div className={styles.info}>
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
        </div>;
    }
}

class Header extends Component {
    render () {
        return <div className={styles.header}>
            <div className={styles.content}>
                <Avatar/>
                <Info/>
            </div>
        </div>;
    }
}
class Main extends Component {
    render () {
        return <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.main_content}>
                <Header/>
                </div>
            </div>
        </div>;
    }
}
class Description extends Component {
    render () {
        return <section>
            {/*<h1 className={styles.title}>react-bootstrap-app</h1>
            <div className={styles.description}>Сделай форк и начинай кодить</div>*/}
            <Nav/>
            <Main/>
        </section>;
    }
}

export default Description;
