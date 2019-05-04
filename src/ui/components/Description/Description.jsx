import React, { Component } from 'react';
import styles from './Description.css';

class Logo extends Component {
    render () {
        return <div className={styles.logo}>
            <img src="http://www.transparentpng.com/thumb/logo-instagram/SKq9yH-black-and-white-instagram-logo-png.png" style={{ width: 26, height: 26 }}/>
            <img className={styles.stick} src="https://img.icons8.com/ios/420/thick-vertical-line-filled.png" style={{ width: 3, height: 32 }}/>
            <img className={styles.insta} id='insta' src="https://www.lipoza.com/Uploads/EditorUploads/instagram_.png" style={{ height: 38 }}/>
        </div>;
    }
}

class Form extends Component {
    onFormClickHandler (e) {
        e.preventDefault();
        document.getElementById('cross').classList.add(styles.cross);
        document.getElementById('cross').classList.remove(styles.cross_change);
        document.getElementById('glass').classList.add(styles.glass_change);
        document.getElementById('glass').classList.remove(styles.glass);
        document.getElementById('form').classList.add(styles.form_change);
    };
    outFormClickHandler (e) {
        e.preventDefault();
        document.getElementById('cross').classList.remove(styles.cross);
        document.getElementById('cross').classList.add(styles.cross_change);
        document.getElementById('glass').classList.remove(styles.glass_change);
        document.getElementById('glass').classList.add(styles.glass);
        document.getElementById('form').classList.remove(styles.form_change);
    };
    render () {
        return <div className={styles.form} id='form'>
            <form className='add cf' onFocus={this.onFormClickHandler} onBlur={this.outFormClickHandler}>
                <div className={styles.glass} role="button" tabIndex="0" id='glass'>
                    <span className={styles.SearchIcon}><img className={styles.SearchIcon} src="https://pngimage.net/wp-content/uploads/2018/06/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BB%D1%83%D0%BF%D0%B0-png-8.png"/></span>
                </div>
                <input
                    className='add__btn'
                    type='text'
                    placeholder='Поиск'
                    ref='search'
                />
                <div className={styles.cross_change} id='cross'>
                   <span className={styles.cross_icon}><img className={styles.CrossIcon} src="https://www.freeiconspng.com/uploads/close-button-png-27.png"/></span>
                </div>
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
        return <div className={styles.navigation} id='navigation'>
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
        </div>;
    }
}

class PhotoPosts extends Component {
    render () {
        return <div className={styles.photo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg" style={{ width: 293, height: 293 }}/>
        </div>;
    }
}
class PhotoTagged extends Component {
    render () {
        return <div className={styles.photo}>
            <img src="https://images.fineartamerica.com/images-medium-large/nature-square--saddleback-dragonfly-carol-groenen.jpg" style={{ width: 293, height: 293 }}/>
        </div>;
    }
}
class PhotoRowPosts extends Component {
    render () {
        return <div className={styles.photo_row}>
            <PhotoPosts/>
            <PhotoPosts/>
            <PhotoPosts/>
        </div>;
    }
}
class PhotoRowTagged extends Component {
    render () {
        return <div className={styles.photo_row}>
            <PhotoTagged/>
            <PhotoTagged/>
            <PhotoTagged/>
        </div>;
    }
}

class Tabs extends Component {
    onBtnClickHandlerOne (e) {
        e.preventDefault();
        document.getElementById('tagged').classList.add(styles.blocked);
        document.getElementById('post').classList.remove(styles.blocked);
        document.getElementById('first').classList.add(styles.active);
        document.getElementById('second').classList.remove(styles.active);
    };
    onBtnClickHandlerTwo (e) {
        e.preventDefault();
        document.getElementById('post').classList.add(styles.blocked);
        document.getElementById('tagged').classList.remove(styles.blocked);
        document.getElementById('second').classList.add(styles.active);
        document.getElementById('first').classList.remove(styles.active);
    };
    render () {
        return <div className={styles.nav_tabs}>
            <a href='' onClick={this.onBtnClickHandlerOne} id='first' className={styles.active}><div><img src="http://cdn.onlinewebfonts.com/svg/img_33853.png" style={{ width: 12, height: 12 }}/></div><span>публикации</span></a>
            <a href='' onClick={this.onBtnClickHandlerTwo} id='second' className={styles.marg}><div><img src="http://cdn.onlinewebfonts.com/svg/img_266351.png" style={{ width: 14, height: 14 }}/></div><span>отметки</span></a>
        </div>;
    }
}

class TabFirst extends React.Component {
    render () {
        return (
            <div>
                <div id='post'>
                    <PhotoRowPosts/>
                    <PhotoRowPosts/>
                    <PhotoRowPosts/>
                </div>
            </div>
        );
    }
}
class TabSecond extends React.Component {
    render () {
        return (
            <div>
                <div id='tagged'>
                    <PhotoRowTagged/>
                    <PhotoRowTagged/>
                    <PhotoRowTagged/>
                </div>
            </div>
        );
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
                    <Tabs/>
                    <TabFirst/>
                    <TabSecond/>
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
